const fs = require('fs');
const path = require('path');

/**
 * Generates a table of contents for a given directory.
 * @param {string} directory - The directory to generate the table of contents for.
 * @returns {string} The generated table of contents.
 */
function generateTableOfContents(directory) {
  // Initialize the table of contents with an empty string
  let tableOfContents = "";

  /**
   * Traverses the directory recursively and generates the table of contents.
   * @param {string} currentPath - The current path being traversed.
   * @param {number} depth - The depth of the current path.
   */
  function traverseDirectory(currentPath, depth) {
    // Get the files in the current directory
    const files = fs.readdirSync(currentPath);

    // Traverse each file in the directory
    for (const file of files) {
      // Get the full path of the file
      const filePath = path.join(currentPath, file);

      // Get the stats of the file
      const stats = fs.statSync(filePath);

      // If the file is a directory, generate the table of contents recursively
      if (stats.isDirectory()) {
        // Capitalize the first letter of the directory name
        const folderName = file.charAt(0).toUpperCase() + file.slice(1);

        // Add the folder name to the table of contents with appropriate indentation
        tableOfContents += `${"    ".repeat(depth)}- ${folderName}\n`;

        // Recursively traverse the directory
        traverseDirectory(filePath, depth + 1);
      } 
      // If the file is a JavaScript file, generate a link to it in the table of contents
      else if (file.endsWith(".js")) {
        // Get the relative path of the file
        const relativePath = path.relative(directory, filePath).replace(/\\/g, "/");

        // Add a link to the file in the table of contents with appropriate indentation
        tableOfContents += `${"    ".repeat(depth)}- [${file}](${relativePath})\n`;
      }
    }
  }

  // Start traversing the given directory
  traverseDirectory(directory, 0);

  // Return the generated table of contents
  return tableOfContents;
}

// Define the directory to generate the table of contents for
const directory = "Tutorials";

// Generate the table of contents
const tableOfContents = generateTableOfContents(directory);

// Print the generated table of contents to the console
console.log(tableOfContents);
