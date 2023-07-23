const { generateTemplateFilesBatch } = require("generate-template-files");

const config = require("../../package.json");

const args = process.argv.slice(2);
console.log(args);

const [type, ...params] = args;

switch (type) {
  case "component":
  case "c":
    generateComponent(params[0]);
    break;
  case "icon-component":
  case "ic":
    generateIconComponent(params[0]);
    break;
  default:
    console.error("Unknown type " + type);
    process.exit();
    break;
}

function generateComponent(name) {
  generateTemplateFilesBatch([
    {
      option: "Create React Component",
      defaultCase: "(pascalCase)",
      entry: {
        folderPath: "./src/tools/templates/component",
      },
      dynamicReplacers: [{ slot: "__name__", slotValue: name }],
      output: {
        path: "./src/components/__name__",
      },
      onComplete: (results) => {
        console.log("results", results);
      },
    },
  ]);
}

function generateIconComponent(name) {
  generateTemplateFilesBatch([
    {
      option: "Create React Component",
      defaultCase: "(pascalCase)",
      entry: {
        folderPath: "./src/tools/templates/icon-component",
      },
      dynamicReplacers: [{ slot: "__name__", slotValue: name }],
      output: {
        path: "./src/icon-components/__name__",
      },
      onComplete: (results) => {
        console.log("results", results);
      },
    },
  ]);
}
