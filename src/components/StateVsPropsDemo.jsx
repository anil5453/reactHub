import React, { useState } from "react";

const StateVsPropsDemo = () => {
  // Example State
  const [count, setCount] = useState(0);

  // Example Props simulation
  const childMessage = "Hello from Parent via Props!";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Understanding State in React</h1>
      <p>
        <strong>Definition:</strong> State is a built-in object that stores
        data for a component. Unlike props, it can be changed during the
        component’s lifecycle.
      </p>

      <h2>Live State Example</h2>
      <p>
        <strong>Count:</strong> {count}
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "6px 12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      <hr />

      <h2>State vs Props</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Feature</th>
            <th>State</th>
            <th>Props</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition</td>
            <td>Holds data specific to the component</td>
            <td>Passes data from parent to child</td>
          </tr>
          <tr>
            <td>Mutability</td>
            <td>Mutable (can be changed)</td>
            <td>Immutable (read-only)</td>
          </tr>
          <tr>
            <td>Scope</td>
            <td>Local to the component</td>
            <td>Accessible to child components</td>
          </tr>
          <tr>
            <td>Purpose</td>
            <td>Manages dynamic data</td>
            <td>Facilitates component communication</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>Example Code</h2>
      <pre
        style={{
          backgroundColor: "#282c34",
          color: "#61dafb",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        {`
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // State
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Props example
const Child = ({ message }) => <p>{message}</p>;
`}
      </pre>

      <h2>Props Example in Action</h2>
      <Child message={childMessage} />
    </div>
  );
};

// Child component for props example
const Child = ({ message }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        marginTop: "10px",
      }}
    >
      <strong>Child Component:</strong> {message}
    </div>
  );
};

export default StateVsPropsDemo;
