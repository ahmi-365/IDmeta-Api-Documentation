// src/data/generalCommandLineData.js

export const generalCommandLineData = {
  title: "A Beginner's Guide to the Command Line",
  subtitle:
    "Master essential command line tools and techniques for effective API development and testing.",

  why: {
    heading: "Why Use the Command Line?",
    text: "The command line is a powerful tool for API development, offering speed, automation, and precise control over your development workflow.",
  },

  essentials: {
    heading: "Essential Commands",
    sections: [
      {
        title: "Navigation",
        code: `# List directory contents
ls -la

# Change directory
cd /path/to/directory

# Print current directory
pwd`,
      },
      {
        title: "Working with Files",
        code: `# Create a new file
touch filename.txt

# View file contents
cat filename.txt

# Edit file with nano
nano filename.txt`,
      },
    ],
  },

  apiTesting: {
    heading: "API Testing with cURL",
    sections: [
      {
        title: "GET Requests",
        code: `curl -X GET "https://api.example.com/v1/resource" \\
  -H "Authorization: Bearer your_token" \\
  -H "Content-Type: application/json"`,
      },
      {
        title: "POST Requests",
        code: `curl -X POST "https://api.example.com/v1/resource" \\
  -H "Authorization: Bearer your_token" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "example", "value": "test"}'`,
      },
    ],
  },

  tips: {
    heading: "Useful Tips",
    items: [
      {
        title: "Use Tab Completion",
        text: "Press Tab to auto-complete file names and commands.",
      },
      {
        title: "Command History",
        text: "Use the up arrow to cycle through previous commands.",
      },
      {
        title: "Pipe Output",
        text: "Use | to pass output from one command to another.",
      },
    ],
  },
};
