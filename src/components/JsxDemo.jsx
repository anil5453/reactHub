import React, { useState } from "react";

const JSXDemo = () => {
  const [view, setView] = useState("jsx"); // jsx | non-jsx

  // JSX example
  const JSXExample = (
    <div style={{ padding: "10px", backgroundColor: "#e6f7ff", borderRadius: "8px" }}>
      <h1>USING JSX</h1>
      <p>This is a JSX-based React Component</p>
      {` const JSXExample = (
    <div style={{ padding: "10px", backgroundColor: "#e6f7ff", borderRadius: "8px" }}>
      <h1>USING JSX</h1>
      <p>This is a JSX-based React Component</p>
    </div>
  );`}
    </div>
  );

  // Without JSX example

  const NonJSXExample = (
    <div style={{ padding: "10px", backgroundColor: "#e6f7ff", borderRadius: "8px" }}>
      <h1>USING Without JSX</h1>
      <p>This is a JSX-based React Component</p>
      {` const NonJSXExample = React.createElement(
    "div",
    { style: { padding: "10px", backgroundColor: "#fff4e6", borderRadius: "8px" } },
    React.createElement("h1", null, "WITHOUT JSX"),
    React.createElement("p", null, "This is a React component without JSX"),
  );`}
    </div>
  );
  

  const comparisonData = [
    ["Syntax", "Simple, XML-like syntax", "Uses React.createElement() method"],
    ["Readability", "Easier to read and write", "Complex and harder to understand"],
    ["Code Complexity", "Less code; more elegant", "Verbose, requires nested calls for children"],
    ["Attributes", "HTML-like attributes (className, id)", "Pass as key-value pairs in object"],
    ["Reusability", "Easier in JSX", "Reusable but harder to manage"],
    ["Transpilation", "Converted to React.createElement()", "No transpilation required"],
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>JSX in React</h2>
      <p>
        JSX (JavaScript XML) is an extension of JavaScript syntax that allows
        writing XML-like code to define elements and components in React.  
        It makes React code simpler and more elegant by providing a declarative syntax for creating UI elements.
      </p>

      {/* Buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setView("jsx")}
          style={{
            padding: "8px 16px",
            marginRight: "10px",
            backgroundColor: view === "jsx" ? "#1890ff" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Show JSX
        </button>
        <button
          onClick={() => setView("non-jsx")}
          style={{
            padding: "8px 16px",
            backgroundColor: view === "non-jsx" ? "#fa8c16" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Show Without JSX
        </button>
      </div>

      {/* Code Display */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {view === "jsx" ? JSXExample : NonJSXExample}
      </div>

      {/* Comparison Table */}
      <h3>Comparison Between JSX and Without JSX</h3>
      <table
        border="1"
        cellPadding="8"
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "left",
        }}
      >
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Feature</th>
            <th>JSX</th>
            <th>Without JSX</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map(([feature, jsx, nonJsx], index) => (
            <tr key={index}>
              <td>{feature}</td>
              <td>{jsx}</td>
              <td>{nonJsx}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JSXDemo;
