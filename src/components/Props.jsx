import { Component } from "react";
// import './index.css';

class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestions: false
    };
  }

  handleShowQuestions = () => {
    this.setState({ showQuestions: true });
  }

  render() {
    const codeSnippet = `
import React from "react";
import ReactDOM from "react-dom/client";

// Welcome component with props
const Welcome = (props) => {
  const { name, greeting } = props;
  return <h1 className="message">{greeting}, {name}</h1>;
};

// Render Welcome component with props
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Welcome name="Rahul" greeting="Hello" />
);
    `;

    const questions = [
      "1️⃣ Create a component that takes `name` prop and displays: Hello, {name}!",
      "2️⃣ Build a List component that receives an array of items as props and renders them in a <ul>.",
      "3️⃣ Create a Button component that takes an onClick function as prop and triggers it when clicked."
    ];

    return (
      <div className="props-container">
        <div className="props-content">
          <h1 className="main-heading">🚀 Props And Components</h1>

          <h2 className="sub-heading">✨ What is Props in React?</h2>
          <p className="definition">
            <strong>Definition:</strong> Props (short for "properties") are read-only objects used to pass data 
            from a parent component to a child component. They help components communicate and stay reusable.
          </p>

          <h2 className="sub-heading">✅ Key Points</h2>
          <ul className="points-list">
            <li>Props let you pass data to components.</li>
            <li>They are immutable inside the child.</li>
            <li>Passed like attributes in JSX tags.</li>
          </ul>

          <div className="code-section">
            <h3>💻 Code Example:</h3>
            <pre>
              <code>{codeSnippet}</code>
            </pre>
          </div>

          <h2 className="sub-heading">📌 What data can props share?</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data type</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>String</td><td>"Hello"</td></tr>
              <tr><td>Number</td><td>42</td></tr>
              <tr><td>Boolean</td><td>true or false</td></tr>
              <tr><td>Array</td><td>[1, 2, 3]</td></tr>
              <tr><td>Object</td><td>{`{ name: 'Karthik' }`}</td></tr>
              <tr><td>Function</td><td>{`() => alert('Hi')`}</td></tr>
              <tr><td>JSX</td><td>{`<p>Hi</p>`}</td></tr>
            </tbody>
          </table>

          <div className="practice-section">
            <button className="practice-button" onClick={this.handleShowQuestions}>
              Practice Questions
            </button>

            {this.state.showQuestions && (
              <ul className="questions-list">
                {questions.map((q, index) => (
                  <li key={index}>{q}</li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    );
  }
}

export default Props;
