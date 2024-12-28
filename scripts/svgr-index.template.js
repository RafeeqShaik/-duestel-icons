const path = require("path");

module.exports = (filePaths) => {
  const exportEntries = [];

  const folderName = filePaths.length
    ? path
        .basename(path.dirname(filePaths[0].path))
        .replace(/^\w/, (c) => c.toUpperCase())
    : null;

  // Add React import
  exportEntries.push(`
    import React, { JSX } from "react";
    import { SvgProps } from "react-native-svg";
    `);

  // Process each file path
  exportEntries.push(
    ...filePaths.map((filePath, idx) => {
      // Extract component name without the file extension
      const componentName = filePath.path
        .split("/")
        .pop()
        .replace(/\.[^.]+$/, "") // Removes the last file extension (e.g., .tsx, .svg)
        .replace(/[^a-zA-Z0-9]/g, "_"); // Ensures valid variable names

      return `import ${componentName} from './${componentName}';`;
    })
  );

  // Add component definition and export
  exportEntries.push(`
    type variant = "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";

    type IconProps = {
      variant?: variant;
    } & SvgProps;

    const components: Record<variant, (props: SvgProps) => JSX.Element> = {
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
