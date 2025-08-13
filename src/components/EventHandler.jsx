// src/components/EventHandling.jsx
import React, { Component, useState } from "react";

function EventHandling() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎯 Event Handling in React</h1>

      <section style={styles.section}>
        <h2>📌 What is an Event?</h2>
        <p>
          An <b>event</b> is an action or occurrence that happens in the browser — 
          such as a user clicking a button, typing in an input, or hovering over an element.
          In React, events work similarly to JavaScript events, but they follow the
          <b> camelCase naming convention</b> (e.g., <code>onClick</code> instead of <code>onclick</code>).
        </p>
      </section>

      <section style={styles.section}>
        <h2>📌 What is an Event Handler?</h2>
        <p>
          An <b>event handler</b> is a function that is triggered in response to a specific event.
          In React, we pass these handler functions as props to event attributes like
          <code> onClick</code>, <code> onChange</code>, etc.
        </p>
      </section>

      <section style={styles.section}>
        <h2>⚡ Event Handling in Functional Components</h2>
        <p>
          In a functional component, you simply define a function and pass it to the event attribute.
        </p>
        <CodeBlock
          code={`function FunctionClick() {
  function clickHandle() {
    console.log('Button clicked!');
  }
  
  return (
    <button onClick={clickHandle}>Click me</button>
  );
}`}
        />
        <LiveFunctionClick />
      </section>

      <section style={styles.section}>
        <h2>⚡ Event Handling in Class Components</h2>
        <p>
          In a class component, the event handler is usually defined as a method of the class.
          You must use <code>this</code> to refer to the instance of the component.
        </p>
        <CodeBlock
          code={`class ClassClick extends React.Component {
  clickHandle() {
    console.log('Clicked the button!');
  }

  render() {
    return (
      <button onClick={this.clickHandle}>Click me</button>
    );
  }
}`}
        />
        <LiveClassClick />
      </section>

      <section style={styles.section}>
        <h2>📊 Functional vs Class Event Handling</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Function Component</th>
              <th>Class Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Syntax</td>
              <td>Uses normal functions or arrow functions</td>
              <td>Uses methods inside the class</td>
            </tr>
            <tr>
              <td>Binding</td>
              <td>No need to bind <code>this</code></td>
              <td>May need to bind <code>this</code> in constructor or use arrow functions</td>
            </tr>
            <tr>
              <td>React Hooks</td>
              <td>Can use hooks like <code>useState</code>, <code>useEffect</code></td>
              <td>Cannot use hooks</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

// ----------- Interactive Function Component Example -------------
function LiveFunctionClick() {
  const [count, setCount] = useState(0);

  function clickHandle() {
    console.log("Function Component Button Clicked!");
    setCount(count + 1);
  }

  return (
    <div style={styles.exampleBox}>
      <p>Button clicked <b>{count}</b> times.</p>
      <button onClick={clickHandle} style={styles.button}>Click Me</button>
    </div>
  );
}

// ----------- Interactive Class Component Example -------------
class LiveClassClick extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // Binding method to this
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    console.log("Class Component Button Clicked!");
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={styles.exampleBox}>
        <p>Button clicked <b>{this.state.count}</b> times.</p>
        <button onClick={this.clickHandle} style={styles.button}>Click Me</button>
      </div>
    );
  }
}

// ----------- Code Block Component -------------
function CodeBlock({ code }) {
  return (
    <pre style={styles.codeBlock}>
      <code>{code}</code>
    </pre>
  );
}

// ----------- Styles -------------
const styles = {
  container: { fontFamily: "Arial, sans-serif", padding: "20px" },
  heading: { color: "#2c3e50" },
  section: { marginBottom: "30px" },
  table: { width: "100%", borderCollapse: "collapse" },
  codeBlock: {
    background: "#f4f4f4",
    padding: "10px",
    borderRadius: "5px",
    overflowX: "auto",
  },
  exampleBox: {
    background: "#ecf0f1",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
  },
  button: {
    padding: "8px 15px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "5px",
  },
};

export default EventHandling;
