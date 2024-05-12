const fs = require("fs");
const path = require("path");

const directoryPath = "./src/icons/";
const indexPath = path.join(directoryPath, "index.ts");

const tsxTemplate = (content, title) => `
import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const ${title} = ({ title, ...props }: SVGIconProps) => {
  const id = useSanitizedId();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!title}
      aria-labelledby={title ? id : undefined}
      {...props}
    >
      {title && <title id={id}>{title}</title>}
      ${content}
    </svg>
  );
};
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toCamelCase(str) {
  return str.replace(/[-\s]+(.)?/g, (match, chr) =>
    chr ? chr.toUpperCase() : "",
  );
}

async function scanDirectory() {
  const files = fs.readdirSync(directoryPath);
  const exportLines = [];

  for (const file of files) {
    if (path.extname(file).toLowerCase() === ".svg") {
      const filePath = path.join(directoryPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const pathMatches = fileContent.match(/<path[^>]+>/g) || [];
      const pathContent = pathMatches.join("\n");

      const componentName = toCamelCase(file.replace(".svg", ""));
      const newFileName = capitalizeFirstLetter(componentName);
      const tsxContent = tsxTemplate(pathContent, newFileName);

      fs.writeFileSync(
        path.join(directoryPath, newFileName + ".tsx"),
        tsxContent,
        "utf8",
      );
      fs.unlinkSync(filePath);

      exportLines.push(`export * from "./${newFileName}";`);
    }
  }

  if (exportLines.length > 0) {
    fs.appendFileSync(indexPath, exportLines.join("\n") + "\n");
  }
}

scanDirectory();
