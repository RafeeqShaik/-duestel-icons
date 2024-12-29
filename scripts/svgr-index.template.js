const path = require("path");
const os = require("os");

const capitalize = (str = "") => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = (filePaths) => {
  const exportEntries = [];

  const folderName = filePaths.length
    ? path
        .basename(path.dirname(filePaths[0].path))
        .replace(/^\w/, (c) => c.toUpperCase())
    : null;

  // Add React import
  exportEntries.push(`
      import React, { JSX, SVGProps } from "react";
    `);

  // Process each file path
  exportEntries.push(
    ...filePaths.map((filePath, idx) => {
      console.log(filePaths);
      // Extract component name without the file extension
      const componentName = filePath.originalPath
        .split(os.platform() === "win32" ? "\\" : "/")
        .pop()
        .replace(/\.[^.]+$/, "") // Removes the last file extension (e.g., .tsx, .svg)
        .replace(/[^a-zA-Z0-9]/g, "_"); // Ensures valid variable names

      return `import ${capitalize(componentName)} from './${capitalize(
        componentName
      )}';`;
    })
  );

  // Add component definition and export
  exportEntries.push(`
    type variant = "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";

    type IconProps = {
      variant?: variant;
    } & (SVGProps<SVGSVGElement> & {
      size?: string | number;
      color?: string;
    });

    const components: Record<variant, (props: IconProps) => JSX.Element> = {
      bold: Bold,
      broken: Broken,
      bulk: Bulk,
      linear: Linear,
      outline: Outline,
      twotone: Twotone,
    };

    const ${folderName} = ({ variant = "outline", ...rest }: IconProps) => {
      const Slot = components[variant];
      return <Slot {...rest} />;
    };

    export default ${folderName};
  `);

  return exportEntries.join("\n");
};
