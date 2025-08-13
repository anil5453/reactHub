import React, { useState } from "react";

const ComponentComparison = () => {
  const [view, setView] = useState("functional");

  const features = {
    functional: {
      title: "Functional Component",
      definition: "A plain JavaScript function that returns JSX.",
      syntax: "Simple and concise function syntax.",
      state: "Uses React Hooks like useState.",
      props: "Passed as a function argument (props).",
      lifecycle: "Uses Hooks like useEffect.",
      performance: "Generally faster due to less overhead.",
      usage: "Recommended for most use cases."
    },
    class: {
      title: "Class Component",
      definition: "An ES6 class that extends React.Component.",
      syntax: "Requires a class with a render() method.",
      state: "Manages state using this.state and this.setState.",
      props: "Accessed via this.props.",
      lifecycle:
        "Uses built-in methods like componentDidMount, componentDidUpdate, and componentWillUnmount.",
      performance: "Slightly slower due to more overhead.",
      usage: "Less commonly used in new React projects."
    }
  };

  return (
    <div style={styles.container}>
      <h2>React Component Types</h2>
      <div style={styles.buttons}>
        <button
          style={{
            ...styles.button,
            backgroundColor: view === "functional" ? "#61dafb" : "#ddd"
          }}
          onClick={() => setView("functional")}
        >
          Functional
        </button>
        <button
          style={{
            ...styles.button,
            backgroundColor: view === "class" ? "#61dafb" : "#ddd"
          }}
          onClick={() => setView("class")}
        >
          Class
        </button>
      </div>

      <div style={styles.card}>
        <h3>{features[view].title}</h3>
        <ul>
          <li><b>Definition:</b> {features[view].definition}</li>
          <li><b>Syntax:</b> {features[view].syntax}</li>
          <li><b>State Management:</b> {features[view].state}</li>
          <li><b>Props:</b> {features[view].props}</li>
          <li><b>Lifecycle Methods:</b> {features[view].lifecycle}</li>
          <li><b>Performance:</b> {features[view].performance}</li>
          <li><b>Modern Usage:</b> {features[view].usage}</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px"
  },
  buttons: {
    marginBottom: "20px"
  },
  button: {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px"
  },
  card: {
    maxWidth: "500px",
    margin: "0 auto",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "left",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }
};

export default ComponentComparison;
