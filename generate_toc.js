const fs = require('fs');
const path = require('path');

function generateTableOfContents(directory) {
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
                tableOfContents += `${" ".repeat(depth)}- ${folderName}\n`;
                traverseDirectory(filePath, depth + 1);
            } else if (file.endsWith(".js")) {
                const absolutePath = path.join(directory, filePath);
                console.log(`Adding JS file to TOC: ${file} - ${absolutePath}`);
                tableOfContents += `${" ".repeat(depth)}- [${file}](${absolutePath})\n`;
            }
        }
    }

    traverseDirectory(directory, 0);

    return tableOfContents;
}

const directory = 'Tutorials';
const tableOfContents = generateTableOfContents(directory);

const readmePath = path.join(process.env.GITHUB_WORKSPACE, 'README.md');
console.log(readmePath);
let readmeContent = fs.readFileSync(readmePath, 'utf8');
const tocMarker = '<!-- INSERT_TOC_HERE -->'; // Unique marker to indicate where the TOC should be inserted

// Find the first occurrence of the tocMarker in the README content
const markerIndex = readmeContent.indexOf(tocMarker);

if (markerIndex !== -1) {
    // Insert the generated table of contents below the tocMarker
    const updatedContent = readmeContent.slice(0, markerIndex + tocMarker.length) + '\n\n' + tableOfContents + readmeContent.slice(markerIndex + tocMarker.length);

    // Write the updated content back to the README file using writeFile
    fs.writeFile(readmePath, updatedContent, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error("Error writing to README file:", err);
        } else {
            console.log("README file updated successfully!");
        }
    });
} else {
    console.error("Unable to find the tocMarker in the README content. Update failed.");
}