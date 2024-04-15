const fs = require('fs');
const path = require('path');

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

        console.log(`Adding folder to TOC: ${folderName}`); // Log added folder

        // Add the folder name to the table of contents with appropriate indentation
        tableOfContents += `${" ".repeat(depth)}- ${folderName}\n`;

        // Recursively traverse the directory
        traverseDirectory(filePath, depth + 1);
      } else if (file.endsWith(".js")) {
        // Get the absolute path of the file
        const absolutePath = path.join(directory, filePath);

        console.log(`Adding JS file to TOC: ${file} - ${absolutePath}`); // Log added JS file

        // Add a link to the file in the table of contents with appropriate indentation
        tableOfContents += `${" ".repeat(depth)}- [${file}](${absolutePath})\n`;
      }
    }
  }

  // Start traversing the given directory
  traverseDirectory(directory, 0);

  // Return the generated table of contents
  return tableOfContents;
}

const directory = 'Tutorials';
const tableOfContents = generateTableOfContents(directory);

const readmePath = path.join(process.env.GITHUB_WORKSPACE, 'README.md');
console.log(readmePath);
let readmeContent = fs.readFileSync(readmePath, 'utf8');
const tocHeader = '## Table of Contents';
const tocMarker = '';
const updatedReadmeContent = `${readmeContent}\n\n${tocHeader}\n\n${tableOfContents}\n\n${tocMarker}`;

console.log("Table of Contents\n\n ",updatedReadmeContent);
console.log("Content before TOC:\n\n", updatedReadmeContent.slice(0, 100)); // First 100 characters
console.log("Updated TOC content:\n\n", updatedReadmeContent.slice(updatedReadmeContent.indexOf(tocHeader), updatedReadmeContent.indexOf(tocMarker, updatedReadmeContent.indexOf(tocHeader) + 1))); // Extract TOC section
console.log("Content after TOC:\n\n", updatedReadmeContent.slice(-100)); // Last 100 characters

try {
  fs.writeFileSync(readmePath, updatedReadmeContent, { encoding: 'utf8' });
  console.log("README file updated successfully!");
} catch (error) {
  console.error("Error writing to README file:", error);
  // Handle the error (e.g., fail the job, log a message)
}
