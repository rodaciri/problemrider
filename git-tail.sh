#!/bin/bash

# Git diff tail script
# Continuously monitors and displays new changes in git repository

# Initialize an empty array to track previously seen files
declare -A seen_files

# Function to get and display diffs
monitor_changes() {
    # Get current changes with more detailed tracking
    current_changes=$(git status -s)
    
    # Iterate through current changes
    while IFS= read -r line; do
        # Extract file name and status (handles more git status formats)
        file=$(echo "$line" | awk '{print $2}')
        status=$(echo "$line" | awk '{print $1}')
        
        # Check if file is new or not previously seen
        if [[ -n "$file" ]] && [[ -z "${seen_files[$file]}" ]]; then
            # Mark file as seen
            seen_files[$file]=1
            
            # Print status line with color
            case "$status" in
                "M")
                    echo -e "\e[33mModified: $line\e[0m"  # Yellow for modified
                    ;;
                "A")
                    echo -e "\e[32mAdded: $line\e[0m"     # Green for added
                    ;;
                "D")
                    echo -e "\e[31mDeleted: $line\e[0m"   # Red for deleted
                    ;;
                *)
                    echo "$line"
                    ;;
            esac
            
            # Show diff for the file
            git diff "$file"
            echo -e "\e[90m---\e[0m"
        fi
    done <<< "$current_changes"
}

# Function to handle script interruption
cleanup() {
    echo -e "\n\e[31mMonitoring stopped.\e[0m"
    exit 0
}

# Trap interruption signals
trap cleanup SIGINT SIGTERM

# Main monitoring loop with real-time changes
echo -e "\e[36mStarting git repository change monitoring...\e[0m"
while true; do
    # Use git ls-files to detect changes more reliably
    monitor_changes
    
    # Use inotifywait for more efficient change detection if available
    if command -v inotifywait &> /dev/null; then
        inotifywait -q -e modify,attrib,close_write,move,create,delete .git
    else
        sleep 2  # Fallback to polling every 2 seconds
    fi
done