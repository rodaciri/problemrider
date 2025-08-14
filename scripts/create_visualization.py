import os
import glob
import json
import re
import yaml

def parse_frontmatter_and_content(file_content):
    """Parses YAML frontmatter and markdown content from a file string."""
    try:
        parts = file_content.split('---')
        if len(parts) >= 3:
            frontmatter = yaml.safe_load(parts[1])
            content = '---'.join(parts[2:])
            return frontmatter, content
        return None, file_content
    except (yaml.YAMLError, IndexError) as e:
        print(f"Error parsing file: {e}")
        return None, file_content

def create_visualization():
    """
    Generates an HTML/D3.js visualization of the problems and their relationships.
    """
    # Get the project root directory (parent of scripts directory)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    problems_dir = os.path.join(project_root, '_problems')
    
    problem_files = glob.glob(os.path.join(problems_dir, '*.md'))
    nodes = []
    edges = []
    title_to_filename = {}
    node_ids = set()

    # First pass: Collect all nodes and map titles to filenames
    for filepath in problem_files:
        filename = os.path.basename(filepath)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        frontmatter, _ = parse_frontmatter_and_content(content)
        
        if frontmatter and 'title' in frontmatter:
            node_id = filename
            if node_id not in node_ids:
                category = "Uncategorized"
                fm_category = frontmatter.get('category')
                if isinstance(fm_category, list) and fm_category:
                    category = fm_category[0]
                elif isinstance(fm_category, str):
                    category = fm_category

                nodes.append({
                    "id": node_id,
                    "title": frontmatter.get('title', 'No Title'),
                    "description": frontmatter.get('description', 'No Description.'),
                    "category": category
                })
                node_ids.add(node_id)
                title_to_filename[frontmatter['title'].lower()] = node_id

    # Second pass: Create edges and track incoming connections
    incoming_connections = {node['id']: 0 for node in nodes}
    for filepath in problem_files:
        source_filename = os.path.basename(filepath)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        frontmatter, md_content = parse_frontmatter_and_content(content)
        if not frontmatter:
            continue

        # Split content into sections
        sections = re.split(r'##\s*(Symptoms|Root Causes)', md_content)
        
        # Process sections to create directed edges
        for i in range(1, len(sections), 2):
            section_title = sections[i]
            section_content = sections[i+1]
            linked_files = re.findall(r'\[([^\]]+)\]\(([^)]+\.md)\)', section_content)

            for _, link_filename in linked_files:
                target_filename = os.path.basename(link_filename)
                if target_filename in node_ids:
                    if section_title == 'Symptoms':
                        # The linked symptom is caused by the current problem
                        # Arrow from the linked symptom to the current problem
                        edges.append({"source": target_filename, "target": source_filename})
                        incoming_connections[source_filename] += 1
                    elif section_title == 'Root Causes':
                        # The current problem is caused by the linked root cause
                        # Arrow from the current problem to the linked root cause
                        edges.append({"source": source_filename, "target": target_filename})
                        incoming_connections[target_filename] += 1

    # Remove duplicate edges
    unique_edges = [dict(t) for t in {tuple(d.items()) for d in edges}]
    
    # Adjust node sizes based on incoming connections (max 20, default 10)
    for node in nodes:
        node['size'] = min(20, 10 + incoming_connections.get(node['id'], 0))
    
    graph_data = {"nodes": nodes, "links": unique_edges}

    # Generate the JavaScript file with visualization logic
    js_content = f"""
const graph = {json.dumps(graph_data, indent=2)};

const width = Math.min(1200, window.innerWidth * 0.9);
const height = window.innerHeight - 60; // Account for header

const categoryColors = {{
    'Business': '#d63384',
    'Strategic': '#b02a37',
    'Management': '#e94560',
    'Project Management': '#f8617a',
    'User Experience': '#ff6b8a',
    'Technical': '#0d6efd',
    'Database': '#0056b3',
    'Frontend': '#1a73e8',
    'Performance': '#4285f4',
    'Quality': '#6fa8f5',
    'Testing': '#a8c7fa',
    'Maintenance': '#1e88e5',
    'Design': '#42a5f5',
    'Process': '#198754',
    'Communication': '#20c997',
    'Team Dynamics': '#6f42c1',
    'Delivery': '#fd7e14',
    'Reliability': '#6610f2',
    'Stability': '#8e44ad'
}};

const color = (category) => categoryColors[category] || '#6c757d';

const simulation = d3.forceSimulation(graph.nodes)
    .force("link", d3.forceLink(graph.links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX(width / 2).strength(0.1))
    .force("y", d3.forceY(height / 2).strength(0.1))
    .force("collision", d3.forceCollide().radius(30));

const svg = d3.select("#visualization-container").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom()
        .extent([[0, 0], [width, height]])
        .scaleExtent([0.1, 8])
        .on("zoom", function(event) {{
            container.attr("transform", event.transform);
        }}));

// Container for all elements that should be zoomed/panned
const container = svg.append("g");

// Arrowhead marker with dynamic position
svg.append('defs').append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '-0 -5 10 10')
    .attr('refX', 35)
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 8)
    .attr('markerHeight', 8)
    .attr('xoverflow','visible')
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', '#999')
    .style('stroke','none');

const link = container.append('g')
    .attr('class', 'link')
    .selectAll('line')
    .data(graph.links)
    .enter().append('line')
    .attr('stroke-width', function(d) {{ return Math.sqrt(d.value || 1); }})
    .attr('marker-end', 'url(#arrowhead)');

const node = container.append('g')
    .attr('class', 'nodes')
    .selectAll('g')
    .data(graph.nodes)
    .enter().append('g')
    .attr('class', 'node')
    .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

node.append('circle')
    .attr('r', function(d) {{ return d.size || 10; }})
    .attr('fill', function(d) {{ return color(d.category); }});

node.append('text')
    .text(function(d) {{ return d.title; }})
    .attr('dy', -15);
    
const tooltip = d3.select(".tooltip");

node.on("mouseover", (event, d) => {{
    tooltip.transition().style("opacity", 1);
    tooltip.html(`<strong>${{d.title}}</strong><br/><em>${{d.category}}</em><br/>${{d.description}}`)
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 28) + "px");
    link.style('stroke-opacity', l => (l.source === d || l.target === d) ? 1 : 0.2);
    link.style('stroke', l => (l.source === d || l.target === d) ? '#6c757d' : '#adb5bd');
}})
.on("mouseout", () => {{
    tooltip.transition().style("opacity", 0);
    link.style('stroke-opacity', 0.6);
    link.style('stroke', '#adb5bd');
}})
.on("dblclick", (event, d) => {{
    event.stopPropagation();
    openModal(d);
}});

const categories = [...new Set(graph.nodes.map(d => d.category))].sort();
const legend = d3.select(".legend");

categories.forEach(category => {{
    const legendItem = legend.append("div").attr("class", "legend-item");
    legendItem.append("div")
        .attr("class", "legend-color")
        .style("background-color", color(category));
    legendItem.append("span").text(category);
}});

simulation
    .on("tick", () => {{
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${{d.x}}, ${{d.y}})`);
    }});

function dragstarted(event, d) {{
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}}

function dragged(event, d) {{
    d.fx = event.x;
    d.fy = event.y;
}}

function dragended(event, d) {{
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}}

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(nodeData) {{
    modalTitle.textContent = nodeData.title;
    modalCategory.textContent = nodeData.category;
    modalBody.innerHTML = '<div class="loading">Loading problem details...</div>';
    modal.style.display = 'block';
    
    // Update URL hash when opening modal
    window.history.replaceState(null, null, '#' + nodeData.id);
    
    // Fetch the generated HTML file content
    const problemPath = nodeData.id.replace('.md', '.html');
    fetch(`problems/${{problemPath}}`)
        .then(response => {{
            if (!response.ok) {{
                throw new Error(`HTTP error! status: ${{response.status}}`);
            }}
            return response.text();
        }})
        .then(content => {{
            displayHtmlContent(content, nodeData);
        }})
        .catch(error => {{
            console.error('Error fetching problem content:', error);
            modalBody.innerHTML = `
                <div class="error">
                    <h3>Error Loading Content</h3>
                    <p>Could not load the full problem description.</p>
                    <div class="modal-description">${{nodeData.description}}</div>
                </div>
            `;
        }});
}}

function displayHtmlContent(content, nodeData) {{
    // Parse the Jekyll-generated HTML to extract the main content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    // Find the main content area - Jekyll typically puts content in .page-content or main
    let mainContent = doc.querySelector('.page-content main') || 
                     doc.querySelector('main') || 
                     doc.querySelector('.page-content') ||
                     doc.querySelector('article');
    
    if (!mainContent) {{
        // Fallback: try to find content by looking for common patterns
        mainContent = doc.querySelector('div[class*="content"]') || doc.body;
    }}
    
    let html = '';
    if (mainContent) {{
        html = mainContent.innerHTML;
        
        // Convert relative markdown links to problem-link spans for modal navigation
        html = html.replace(/href="([^"]*\\.md)"/g, function(match, mdFile) {{
            const filename = mdFile.split('/').pop();
            return `class="problem-link" data-problem="${{filename}}"`;
        }});
        
        // Also handle relative problem links
        html = html.replace(/href="\\/problems\\/([^"]*)\\.html"/g, function(match, problemName) {{
            return `class="problem-link" data-problem="${{problemName}}.md"`;
        }});
        
        // Remove any Jekyll-specific elements we don't want
        html = html.replace(/<div class="page-header">.*?<\\/div>/gs, '');
    }} else {{
        html = '<p>Could not extract content from the page.</p>';
    }}
    
    modalBody.innerHTML = `
        <div class="modal-description">${{nodeData.description}}</div>
        ${{html}}
    `;
    
    // Add click handlers for problem links
    const problemLinks = modalBody.querySelectorAll('.problem-link');
    problemLinks.forEach(link => {{
        link.addEventListener('click', function(e) {{
            e.preventDefault();
            const problemFile = this.getAttribute('data-problem');
            const targetNode = graph.nodes.find(n => n.id === problemFile);
            if (targetNode) {{
                openModal(targetNode);
            }}
        }});
    }});
    
    // Convert regular links to open in new tab
    const externalLinks = modalBody.querySelectorAll('a:not(.problem-link)');
    externalLinks.forEach(link => {{
        link.setAttribute('target', '_blank');
    }});
}}

function closeModal() {{
    modal.style.display = 'none';
    // Clear URL hash when closing modal
    window.history.replaceState(null, null, window.location.pathname);
}}

// Event listeners
modalClose.onclick = closeModal;
window.onclick = function(event) {{
    if (event.target === modal) {{
        closeModal();
    }}
}};

// Escape key to close modal
document.addEventListener('keydown', function(event) {{
    if (event.key === 'Escape' && modal.style.display === 'block') {{
        closeModal();
    }}
}});

// Function to highlight and center a specific node
function focusNode(nodeId) {{
    const targetNode = graph.nodes.find(n => n.id === nodeId);
    if (!targetNode) return false;
    
    // Center the node
    const scale = d3.zoomTransform(svg.node()).k || 1;
    const x = -targetNode.x * scale + width / 2;
    const y = -targetNode.y * scale + height / 2;
    
    svg.transition()
        .duration(750)
        .call(d3.zoom().transform, d3.zoomIdentity.translate(x, y).scale(scale));
    
    // Highlight the node temporarily
    const nodeElement = node.filter(d => d.id === nodeId).select('circle');
    const originalColor = nodeElement.attr('fill');
    
    nodeElement
        .transition()
        .duration(200)
        .attr('fill', '#ff6b6b')
        .attr('r', function(d) {{ return (d.size || 10) * 1.5; }})
        .transition()
        .duration(1000)
        .attr('fill', originalColor)
        .attr('r', function(d) {{ return d.size || 10; }});
    
    return true;
}}

// Handle URL fragments on page load
function handleUrlFragment() {{
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {{
        // Wait for the simulation to settle before focusing
        setTimeout(() => {{
            if (!focusNode(hash)) {{
                console.warn('Node not found for hash:', hash);
            }}
        }}, 1000);
    }}
}}

// Initialize URL fragment handling after simulation starts
simulation.on('end', handleUrlFragment);

// Also handle hash changes during navigation
window.addEventListener('hashchange', handleUrlFragment);
"""

    # Load the Jekyll HTML template
    template_file = os.path.join(script_dir, 'templates', 'landscape.template.html')
    with open(template_file, 'r', encoding='utf-8') as f:
        jekyll_page_content = f.read()

    # Write the JavaScript file
    js_output_file = os.path.join(project_root, 'assets', 'js', 'visualization.js')
    os.makedirs(os.path.dirname(js_output_file), exist_ok=True)
    with open(js_output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)

    # Write the Jekyll page
    page_output_file = os.path.join(project_root, 'landscape.html')
    with open(page_output_file, 'w', encoding='utf-8') as f:
        f.write(jekyll_page_content)

    print(f"Jekyll page '{page_output_file}' created successfully.")
    print(f"Visualization JavaScript '{js_output_file}' created successfully.")

if __name__ == '__main__':
    create_visualization()