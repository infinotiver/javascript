// This JavaScript file is responsible for generating a table of contents (TOC) 
// for a given directory and inserting it into a README.md file. The TOC 
// lists the directories and JavaScript files within the given directory.

// Load the built-in 'fs' module to interact with the file system
const fs = require('fs');

// Load the built-in 'path' module to manipulate file paths
const path = require('path');

// Define a function to generate a table of contents for a given directory
function generateTableOfContents(directory, depth = 0) {
    // Initialize the table of contents with an empty string
    let tableOfContents = "";
    const jsonTOC = [];

    // Define a helper function to recursively traverse the directory and generate the table of contents
    function traverseDirectory(currentPath, depth, jsonParent) {
        // Get the files in the current directory
        const files = fs.readdirSync(currentPath);

        // Traverse each file in the directory
        for (const file of files) {
            // Get the full path of the file
            const filePath = path.join(currentPath, file);

            // Get the stats of the file
            const stats = fs.statSync(filePath);
            // If the file is a directory, generate the table of contents recursively
            const prefix = "Tutorials" + "/";
            if (stats.isDirectory()) {
                // Capitalize the first letter of the directory name and add it to the table of contents
                const folderName = file.charAt(0).toUpperCase() + file.slice(1);
                const relativePath = prefix + file;
                tableOfContents += `${" ".repeat(depth * 2)}- [${folderName}](${relativePath})\n`;

                const folderEntry = { name: folderName, path: relativePath, children: [] };
                jsonParent.push(folderEntry);

                // Recursively traverse the directory
                traverseDirectory(filePath, depth + 1, folderEntry.children);
            } 
            // If the file is a JavaScript file, generate a link to it in the table of contents
            else if (file.endsWith(".js")) {
                // Get the relative path of the file
                const relativePath = prefix + file;

                // Add a link to the file in the table of contents
                tableOfContents += `${" ".repeat((depth + 1) * 2)}- [${file}](${relativePath})\n`;

                jsonParent.push({ name: file, path: relativePath });
            }
        }
    }

    // Start traversing the given directory
    traverseDirectory(directory, depth, jsonTOC);

    // Return the generated table of contents and JSON structure
    return { tableOfContents, jsonTOC };
}

// Define the directory to generate the table of contents for
const directory = 'Tutorials';

// Generate the table of contents
const { tableOfContents, jsonTOC } = generateTableOfContents(directory);

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
        }
    });
} 
// If the start or end markers are not found, log an error message
else {
    console.error("Unable to find the start or end markers in the README content. Update failed.");
}

// Write the JSON TOC to a file
const jsonPath = path.join(process.env.GITHUB_WORKSPACE, 'toc.json');
fs.writeFile(jsonPath, JSON.stringify(jsonTOC, null, 2), { encoding: 'utf8' }, (err) => {
    if (err) {
        console.error("Error writing TOC JSON file:", err);
    } else {
        console.log("TOC JSON file created successfully!");
    }
});
