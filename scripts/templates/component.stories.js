module.exports = (componentName) => ({
  content: `// Generated with scripts/create-component.js
import React from "react";
import ${componentName} from ".";

export default {
  title: "${componentName}"
};

export const WithBar = () => <${componentName} />;

export const WithBaz = () => <${componentName} />;
`,
  extension: `.stories.tsx`,
});
