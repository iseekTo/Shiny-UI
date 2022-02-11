module.exports = (componentName) => ({
  content: `// Generated with scripts/create-component.js
import type { I${componentName}Props } from "."

import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from ".";

describe("Test Component", () => {
  let props: I${componentName}Props;

  beforeEach(() => {
    
  });
});
`,
  extension: `.test.tsx`,
});
