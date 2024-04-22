const fs = require('fs');
const path = require('path');

function generateTableOfContents(directory, depth = 0) {
    // Initialize the table of contents with an empty string
    let tableOfContents = "";

    function traverseDirectory(currentPath, depth) {
        const files = fs.readdirSync(currentPath);

        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                const folderName = file.charAt(0).toUpperCase() + file.slice(1);
                console.log(`Adding folder to TOC: ${folderName}`);
                tableOfContents += `${" ".repeat(depth * 2)}- ${folderName}\n`;
                traverseDirectory(filePath, depth + 1);
            } else if (file.endsWith(".js")) {
                const absolutePath = path.join(directory, filePath);
                console.log(`Adding JS file to TOC: ${file} - ${absolutePath}`);
                tableOfContents += `${" ".repeat((depth + 1) * 2)}- [${file}](${absolutePath})\n`;
            }
        }
    }

    traverseDirectory(directory, depth);

    return tableOfContents;
}

const directory = 'Tutorials';
const tableOfContents = generateTableOfContents(directory);

const readmePath = path.join(process.env.GITHUB_WORKSPACE, 'README.md');
console.log(readmePath);
let readmeContent = fs.readFileSync(readmePath, 'utf8');
const startMarker = '<!--TOC_START-->'; // Unique marker to indicate the start of the TOC
const endMarker = '<!--TOC_END-->'; // Unique marker to indicate the end of the TOC

// Find the range of the start and end markers in the README content
const startIndex = readmeContent.indexOf(startMarker);
const endIndex = readmeContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    // Overwrite the content between the start and end markers with the generated table of contents
    const updatedContent = readmeContent.slice(0, startIndex) + tableOfContents + readmeContent.slice(endIndex + endMarker.length);

    // Write the updated content back to the README file using writeFile
    fs.writeFile(readmePath, updatedContent, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error("Error writing to README file:", err);
        } else {
            console.log("README file updated successfully!");

            console.log("Changes committed successfully!");
        }
    });
} else {
    console.error("Unable to find the start or end markers in the README content. Update failed.");
}