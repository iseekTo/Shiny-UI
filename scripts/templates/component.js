module.exports = (componentName) => ({
  content: `// Generated with scripts/create-component.js
import React from "react";

import { Demo } from "./styled"

export interface I${componentName}Props {}

const ${componentName}: React.FC<I${componentName}Props> = () => {

  return (
    <Demo data-testid="${componentName}">{/** Todo... */}</Demo>
  );
}

export default ${componentName};

`,
  extension: `.tsx`,
  isIndexPage: true,
});
