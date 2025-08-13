import React from 'react';


const Exports = () => {
  return (
    <div className="tutorial-container">
      <h2 className="node-title">📦 Export in React</h2>
      <p className="node-info">
        In React, we use <strong>export</strong> to make a component, function, or variable available for use in other files.
        Without exporting, the code in one file cannot be accessed or used in another file.
      </p>

      <h2 className="step-title">Types of Export</h2>
      <ul className="step-description">
        <li>🔹 Named Export</li>
        <li>🔹 Default Export</li>
      </ul>

      {/* Named Export */}
      <h2 className="step-title">✅ 1. Named Export</h2>
      <ul className="step-description">
        <li>Allows exporting <strong>multiple values</strong> from a file.</li>
        <li>Imported using <strong>curly braces</strong> and must match the exported name exactly.</li>
      </ul>

      <h3>🔹 Syntax:</h3>
      <div className="terminal-box1">
        {`export const MyComponent = () => {
  return <h1>Hello</h1>;
};

export const add = (a, b) => a + b;`}
      </div>

      <h3>🔹 Importing Named Export:</h3>
      <div className="terminal-box1">
        {`import { MyComponent, add } from './MyFile';`}
      </div>

      {/* Default Export */}
      <h2 className="step-title">✅ 2. Default Export</h2>
      <ul className="step-description">
        <li>Allows exporting <strong>only one</strong> default value from a file.</li>
        <li>No curly braces needed during import. You can use any name.</li>
      </ul>

      <h3>🔹 Syntax:</h3>
      <div className="terminal-box1">
        {`const Welcome = () => {
  return <h1>Hello</h1>;
};

export default Welcome;`}
      </div>

      <h3>🔹 Importing Default Export:</h3>
      <div className="terminal-box1">
        {`import Welcome from './Welcome';`}
      </div>

      <p className="step-description">💡 You can rename it while importing (no {'{}'} needed).</p>

      {/* Summary Table */}
      <h2 className="step-title">⚠️ Summary Table</h2>
      <div className="table-container">
        <table className="summary-table">
          <thead>
            <tr>
              <th>Export Type</th>
              <th>Syntax (Export)</th>
              <th>Syntax (Import)</th>
              <th>Multiple per file?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Named Export</td>
              <td><code>export const x = ...</code></td>
              <td><code>import {'{ x }'} from ...</code></td>
              <td className="yes">✅ Yes</td>
            </tr>
            <tr>
              <td>Default Export</td>
              <td><code>export default x</code></td>
              <td><code>import x from ...</code></td>
              <td className="no">❌ Only one</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exports;
