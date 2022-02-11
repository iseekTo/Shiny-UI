require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

try {
  const generatedTemplates = templates.map((template) =>
    template(componentName)
  );

  generatedTemplates.forEach((template) => {
    // const prefixs = ['.styled']
    const _componentName =
      "isIndexPage" in template
        ? "index"
        : "isStyledPage" in template
        ? "styled"
        : componentName;
    fs.writeFileSync(
      `${componentDirectory}/${_componentName}${template.extension}`,
      template.content
    );
  });

  console.log(
    "Successfully created component under: " + componentDirectory.green
  );
} catch (error) {
  console.error(error);
  process.exit(1);
}
