// This JavaScript file is responsible for generating a table of contents (TOC) 
// for a given directory and inserting it into a README.md file. The TOC 
// lists the directories and JavaScript files within the given directory.

// Load the built-in 'fs' module to interact with the file system
const fs = require('fs');

// Load the built-in 'path' module to manipulate file paths
const path = require('path');

// Define a function to generate a table of contents for a given directory
function generateTableOfContents(directory, depth = 0, basePath = '') {
    let tableOfContents = "";

    function traverseDirectory(currentPath, depth, relativeBase) {
        const files = fs.readdirSync(currentPath);

        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const stats = fs.statSync(filePath);

            // Build relative path for link from base directory
            const relativePath = path.posix.join(relativeBase, file); // Use posix for consistent forward slashes

            if (stats.isDirectory()) {
                const folderName = file.charAt(0).toUpperCase() + file.slice(1);
                tableOfContents += `${" ".repeat(depth * 2)}- [${folderName}](${relativePath})\n`;

                // Recurse with updated relative base path
                traverseDirectory(filePath, depth + 1, relativePath);
            } else if (file.endsWith('.js')) {
                tableOfContents += `${" ".repeat((depth + 1) * 2)}- [${file}](${relativePath})\n`;
            }
        }
    }

    traverseDirectory(directory, depth, basePath);

    return tableOfContents;
}

// Usage remains the same
const directory = 'Tutorials';
const tableOfContents = generateTableOfContents(directory);



// Define the directory to generate the table of contents for
const directory = 'Tutorials';

// Generate the table of contents
const tableOfContents = generateTableOfContents(directory);


// Define the path to the README.md file
const readmePath = path.join(process.env.GITHUB_WORKSPACE, 'README.md');
console.log(readmePath);

// Read the content of the README.md file
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Define unique markers to indicate the start and end of the TOC in the README content
const startMarker = '<!--TOC_START-->';
const endMarker = '<!--TOC_END-->';

// Find the range of the start and end markers in the README content
const startIndex = readmeContent.indexOf(startMarker);
const endIndex = readmeContent.indexOf(endMarker);

// If the start and end markers are found, update the content with the generated table of contents
if (startIndex !== -1 && endIndex !== -1) {
    const updatedContent = readmeContent.slice(0, startIndex) + startMarker + '\n' + tableOfContents + '\n' + endMarker + readmeContent.slice(endIndex + endMarker.length);

    // Write the updated content back to the README file
    fs.writeFile(readmePath, updatedContent, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error("Error writing to README file:", err);
        } else {
            console.log("README file updated successfully!");

            console.log("Changes committed successfully!");
        }
    });
} 
// If the start or end markers are not found, log an error message
else {
    console.error("Unable to find the start or end markers in the README content. Update failed.");
}


