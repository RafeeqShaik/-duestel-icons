import fs from "fs";
import path from "path";

const ICONS_DIR = path.join(__dirname, "..", "src", "icons");

const modifyIcon = (filePath: string) => {
  let content = fs.readFileSync(filePath, "utf-8");

  // Update props type to include color
  const propsRegex = /SVGProps<SVGSVGElement>/;
  if (propsRegex.test(content)) {
    content = content.replace(
      propsRegex,
      `(SVGProps<SVGSVGElement> & { size?: string | number; color?: string })`
    );
  }

  // Update SVG attributes
  const svgTagRegex = /<svg([^>]*)>/;
  const svgMatch = content.match(svgTagRegex);
  if (svgMatch) {
    const svgAttributes = svgMatch[1];

    let newSvgAttributes = svgAttributes
      .replace(
        /width="[^"]*"/,
        '{...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}'
      )
      .replace(/height="[^"]*"/, "");

    // Remove fill="none" if present as we'll handle fill with the color prop
    // newSvgAttributes = newSvgAttributes.replace(/fill="none"/, "");

    content = content.replace(svgTagRegex, `<svg${newSvgAttributes}>`);
  }

  // Replace hardcoded fill colors in paths with the color prop
  const fillColorRegex = /fill="([^"]*)"/g;
  content = content.replace(
    fillColorRegex,
    'fill={props.color || "currentColor"}'
  );

  // Replace hardcoded stroke colors in paths with the color prop
  const strokeColorRegex = /stroke="([^"]*)"/g;
  content = content.replace(
    strokeColorRegex,
    'stroke={props.color || "currentColor"}'
  );

  // Special handling for fill="#hexcode" pattern
  const hexFillRegex = /fill="#[0-9a-fA-F]{3,6}"/g;
  content = content.replace(
    hexFillRegex,
    'fill={props.color || "currentColor"}'
  );

  // Special handling for stroke="#hexcode" pattern
  const hexStrokeRegex = /stroke="#[0-9a-fA-F]{3,6}"/g;
  content = content.replace(
    hexStrokeRegex,
    'stroke={props.color || "currentColor"}'
  );

  fs.writeFileSync(filePath, content, "utf-8");
};

const processDirectory = async (dirPath: string) => {
  try {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(fullPath);
      } else if (entry.isFile() && path.extname(entry.name) === ".tsx") {
        try {
          modifyIcon(fullPath);
          console.log(`Modified: ${path.relative(ICONS_DIR, fullPath)}`);
        } catch (error) {
          console.error(`Error modifying ${entry.name}:`, error);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error);
  }
};

const main = async () => {
  try {
    await processDirectory(ICONS_DIR);
    console.log("Icon processing completed successfully!");
  } catch (error) {
    console.error("Error in main process:", error);
    process.exit(1);
  }
};

main();
