import fs from "fs";
import path from "path";

const folderPath = path.join(__dirname, "../icons");

console.log(`Renaming files in: ${folderPath}`);
// Function to rename files recursively
const renameFiles = (dir: string) => {
  fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`Failed to read directory: ${dir}`, err);
      return;
    }

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursive call for subfolders
        renameFiles(fullPath);
      } else if (entry.isFile() && entry.name.startsWith("Style=")) {
        const newFileName = entry.name.replace(/^Style=/, "");
        const newPath = path.join(dir, newFileName);

        fs.rename(fullPath, newPath, (renameErr) => {
          if (renameErr) {
            console.error(`Failed to rename file: ${fullPath}`, renameErr);
          } else {
            console.log(`Renamed: ${fullPath} -> ${newPath}`);
          }
        });
      }
    });
  });
};

// Start the renaming process
renameFiles(folderPath);
