import { readdirSync, writeFileSync, lstatSync } from "fs";
import { resolve, join } from "path";

// Directory where to look for folders
const rootDir = resolve("src/icons");

// Path for the output index file
const indexPath = join(resolve(), "index.ts");

// Get all items in the root directory
const items = readdirSync(rootDir);

// Filter to get only directories
const folders = items.filter((item) => {
  const fullPath = join(rootDir, item);
  return lstatSync(fullPath).isDirectory();
});

// Generate export statements for each folder
const exportStatements = folders
  .map((folder) => {
    // Skip node_modules, hidden folders, and any other folders you want to exclude
    if (folder.startsWith(".") || folder === "node_modules") {
      return null;
    }

    return `export { default as ${
      folder.charAt(0).toUpperCase() + folder.slice(1)
    } } from "./src/icons/${folder}";`;
  })
  .filter((statement) => statement !== null) // Remove null statements
  .join("\n");

// Write the export statements to the index file
writeFileSync(indexPath, exportStatements);

console.log(`Generated index.ts with exports from ${folders.length} folders.`);

// Log the generated content for verification
console.log("\nGenerated content:");
console.log(exportStatements);
