import React from 'react';


const Clstuto = () => {
  const topics = [
    { id: "what-is-class", title: "What are React Class Components?" },
    { id: "constructor", title: "Understanding the Role of the Constructor in Class Components" },
    { id: "props", title: "Working with Props in Class Components" },
    { id: "state", title: "State Management in React Class Components" }
  ];

  return (
    <div className="tutorial-container">
      <h1 className="step-title">📘 React Class Components</h1>
      <p className="step-description">
        Gain an understanding of React class components. Learn state management, lifecycle methods,
        and their role in legacy codebases. Perfect for maintaining older projects!
      </p>



      <h2 className="step-title">📑 Table of Contents</h2>
      <ol className="step-description">
        {topics.map((topic, index) => (
          <li key={index}>
            <a href={`#${topic.id}`} className="node-info">{topic.title}</a>
          </li>
        ))}
      </ol>
        <img
          src="https://codebuns.com/wp-content/uploads/2024/04/React-Class-Components.png"
          alt="React Class Component Diagram"
          className="step-image"
        />

      <div className="terminal-box1 border border-danger">
        <pre>
          <code >
{`import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>;
    }
    }
    
    export default Welcome;`}
          </code>
        </pre>
      </div>
      {/* What is a Class Component */}
      <div>
        <h2 id="what-is-class" className="step-title">What are React Class Components?</h2>
        <p className="step-description">
          In the early days of React, class components were the primary way to create reusable UI elements.
          They are built upon JavaScript classes, offering a structured approach to managing state and defining component behavior.
          While functional components are now recommended for new projects, understanding class components remains valuable,
          especially for existing codebases.
        </p>
        <h2 className="step-title">Example of a React Class Component</h2>
        <img src="/photos/exm.png" alt="Class Component Example" className="step-image" />
      </div>

      {/* Explanation */}
      <div>
        <h3 className="step-title">Explanation</h3>
        <ul className="step-description">
          <li><code>class Greeting extends React.Component {'{...}'}</code>: Defines a class component named Greeting.</li>
          <li><code>render() {'{...}'}</code>: Required in class components. It determines the UI rendering.</li>
          <li><code>return (...)</code>: Contains JSX that describes what gets rendered to the UI.</li>
        </ul>
      </div>

      {/* Constructor */}
      <div>
        <h2 id="constructor" className="step-title">Understanding the Role of the Constructor in Class Components</h2>
        <p className="step-description">
          The constructor plays a crucial role in initializing state and binding methods. It's the first method called before the component is mounted.
        </p>
        <ul className="step-description">
          <li><strong>Initializing State:</strong> Done inside the constructor using <code>this.state</code>.</li>
          <li><strong>Binding Event Handlers:</strong> Methods are bound here to maintain context of <code>this</code>.</li>
        </ul>
        <h3 className="step-title">Constructor Example</h3>
        <img src="/photos/exm1.png" alt="Constructor Example" className="step-image" />
        <h3 className="step-title">Explanation</h3>
        <ul className="step-description">
          <li><code>constructor(props)</code>: Defines the constructor.</li>
          <li><code>super(props)</code>: Calls the parent class constructor.</li>
          <li><code>this.state = {'{count: 0}'}</code>: Initializes state with count = 0.</li>
          <li>The <code>render</code> method shows the current count.</li>
        </ul>
      </div>

      {/* Props */}
      <div>
        <h2 id="props" className="step-title">Working with Props in Class Components</h2>
        <p className="step-description">
          Props are inputs to components. They are passed from a parent and read-only within child components.
        </p>
        <ul className="step-description">
          <li><strong>Read-Only:</strong> Cannot be modified inside the component.</li>
          <li><strong>Flexible:</strong> Customize components with props.</li>
          <li><strong>Reusable:</strong> Components can behave differently based on props.</li>
        </ul>
        <h3 className="step-title">Props Example</h3>
        <img src="/photos/exm3.png" alt="Props Example" className="step-image" />
        <h3 className="step-title">Explanation</h3>
        <ol className="step-description">
          <li><code>UserGreeting(props)</code>: Accepts props.</li>
          <li><code>props.name</code>: Uses the name passed from parent.</li>
          <li><code>{'<UserGreeting name="Mark" />'}</code>: Passes “Mark” from parent (App).</li>
        </ol>
      </div>

      {/* State */}
      <div>
        <h2 id="state" className="step-title">State Management in React Class Components</h2>
        <p className="step-description">
          State is data maintained by a component. It can change over time and affects how the component renders.
        </p>
        <ol className="step-description">
          <li><strong>Initializing:</strong> Done in constructor with <code>this.state = {'{...}'}</code>.</li>
          <li><strong>Updating:</strong> Use <code>this.setState({'{...}'})</code> to modify state.</li>
          <li><strong>Accessing:</strong> Use <code>this.state</code> to read values inside render.</li>
        </ol>
        <h4 className="step-title">Example</h4>
        <img src="/photos/exm2.png" alt="State Example" className="step-image" />
        <h3 className="step-title">Explanation</h3>
        <ul className="step-description">
          <li><code>constructor(props)</code>: Initializes state with count: 0.</li>
          <li><code>handleClick = () =&gt; {'{...}'}</code>: Defines event handler for button click.</li>
          <li><code>this.setState({'{count: this.state.count + 1}'})</code>: Increments count.</li>
          <li><code>render()</code>: Displays count and button to trigger state change.</li>
        </ul>
      </div>
    </div>
  );
};

export default Clstuto;
