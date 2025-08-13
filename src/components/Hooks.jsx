import React from "react";

function HooksOverview() {
  const hookTypes = [
    { name: "useState", description: "Manages state in functional components." },
    { name: "useEffect", description: "Performs side effects in components." },
    { name: "useContext", description: "Shares values between components without prop drilling." },
    { name: "useRef", description: "Accesses or stores values that don’t trigger re-render." },
    { name: "useReducer", description: "Manages complex state logic using reducers." },
    { name: "Custom Hooks", description: "Reusable hooks you create for your own logic." },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📌 Understanding React Hooks</h1>
      <p style={styles.intro}>
        Hooks are special functions in React that let you use state and other
        features in functional components, without needing classes.  
        They were introduced in <strong>React 16.8</strong>.
      </p>

      <div style={styles.box}>
        <h2 style={styles.subHeading}>Types of Hooks</h2>
        <ul style={styles.list}>
          {hookTypes.map((hook, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{hook.name}</strong>: {hook.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" },
  heading: { color: "#2c3e50" },
  intro: { fontSize: "16px", marginBottom: "15px" },
  box: { background: "#f9f9f9", padding: "15px", borderRadius: "8px", boxShadow: "0 0 5px rgba(0,0,0,0.1)" },
  subHeading: { color: "#34495e" },
  list: { paddingLeft: "20px" },
  listItem: { marginBottom: "10px" }
};

export default HooksOverview;
