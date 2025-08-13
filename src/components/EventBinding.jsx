import React, { Component } from 'react';
// import './EventBinding.css';


class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!'
    };

    // Method 1: Binding in constructor
    this.handleClick1 = this.handleClick1.bind(this);
  }

  // Method 1
  handleClick1() {
    this.setState({ message: 'Clicked using bind in constructor' });
  }

  // Method 2
  handleClick2 = () => {
    this.setState({ message: 'Clicked using arrow function in class property' });
  }

  render() {
    return (
      <div className="tutorial-container">
        <h2 className="node-title">🧩 Event Binding in React</h2>

        <p className="node-info">
          In class components, you might run into issues where this isn't 
          automatically bound to the class instance inside the event handler. 
          React provides several ways to handle this.
        </p>

        <h2 className="node-title">🧠 Why is Event Binding Needed?</h2>
        <p className="node-info">In JavaScript classes, especially in React class components, 
          this does not refer to the component automatically inside methods.</p>

        <h2 className="node-title">Example</h2> 
        <div className="terminal-box1">
          {`class Example extends React.Component {
  handleClick() {
    console.log(this.state); // ❌ 'this' is undefined here
  }
}
`}
        </div>       
        
        <h3 className="step-title">🔸 4 Common Ways to Bind Events</h3>

        <ul className="step-description">
          <li><strong>1. Binding in the constructor</strong></li>
          <li><strong>2nd Approach: Using .bind(this) in JSX</strong></li>
          <li><strong>3. Using an Arrow Function in JSX</strong></li>
        </ul>
        <div>
          <h2 className="node-title">🧩 Event Binding Methods Comparison</h2>
      <p className="node-info">
        Below is a summary table comparing different ways to bind events in React class components:
      </p>

      <table className="summary-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Code Example</th>
            <th>Pros</th>
            <th>Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1️⃣ Binding in Constructor</td>
            <td>
              <code>
                this.handleClick = this.handleClick.bind(this);
              </code>
            </td>
            <td>Most efficient</td>
            <td>Little verbose</td>
          </tr>
          <tr>
            <td>2️⃣ Arrow Function as Class Property</td>
            <td>
              <code>
                handleClick = () =&gt; &#123;&#125;
              </code>
            </td>
            <td>Clean &amp; modern</td>
            <td>Slightly slower</td>
          </tr>
          <tr>
            <td>3️⃣ Inline Arrow in Render</td>
            <td>
              <code>
                &lt;button onClick={() => this.handleClick()}&gt;
              </code>
            </td>
            <td>Quick &amp; easy</td>
            <td>Re-renders create new function</td>
          </tr>
          <tr>
            <td>4️⃣ Inline Bind in Render</td>
            <td>
              <code>
                &lt;button onClick=&#123;this.handleClick.bind(this)&#125;&gt;
              </code>
            </td>
            <td>Works</td>
            <td>Not recommended (bad performance)</td>
          </tr>
        </tbody>
      </table>
           
        </div>
        <h3 className="step-title">1. Binding in the constructor</h3>
        <p className="node-info">You can bind the event handler method in the 
          constructor to ensure it’s properly bound:</p>
        <h2 className="node-title">Example</h2>
        <div className="terminal-box1">
          {`import React, { Component } from "react";

class Sample2 extends Component {
  constructor() {
    super();
    this.clickevent = this.clickevent.bind(this);
  }

  clickevent() {
    console.log('Button clicked');
  }

  render() {
    return (
      <button onClick={this.clickevent}>Click me</button>
    );
  }
}

export default Sample2;
`}
        </div>
        <h3 className="step-title">2nd Approach: Using .bind(this) in JSX</h3>
        <p className="node-info">You can explicitly bind the method to the 
          class instance using the bind() method in JSX:</p>
        <div className="terminal-box1">
          {`<button> onClick={this.clickevent.bind(this)}>Click me</button>`}
        </div>       
 
       <h3 className="step-title">3.Using an Arrow Function in JSX</h3>
        <p className="node-info">You can use an arrow function in the 
          onClick prop to automatically bind this:</p>
        <div className="terminal-box1">
          {`<button onClick={() => this.logout()}>Logout</button>`}         
        </div> 
        <p className="node-info">•	Arrow functions automatically bind this, so this.logout() 
            correctly refers to the class instance.</p>
            
        <h3>🧪 Example Component:</h3>
        <div className="terminal-box1">
          {`class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello!" };
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1() {
    this.setState({ message: "Clicked using bind in constructor" });
  }

  handleClick2 = () => {
    this.setState({ message: "Clicked using arrow function in class property" });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick1}>Bind in Constructor</button>
        <button onClick={this.handleClick2}>Arrow Function</button>
      </div>
    );
  }
}`}
        </div>

        <h3>🖱️ Output:</h3>
        <p className="step-description">{this.state.message}</p>
        <button onClick={this.handleClick1}>Bind in Constructor</button>
        <button onClick={this.handleClick2}>Arrow Function</button>
      </div>
    );
  }
}

export default EventBinding;
