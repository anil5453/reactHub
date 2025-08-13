import React from 'react';

const ConditionalRendering = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎯 Conditional & List Rendering in React</h1>

      {/* CONDITIONAL RENDERING SECTION */}
      <section style={styles.section}>
        <h2>🔁 1. Conditional Rendering</h2>
        <p>
          Conditional rendering means showing different UI elements based on certain conditions like user authentication, data availability, or user input. React offers multiple ways to achieve this depending on the complexity of your condition.
        </p>

        {/* IF / ELSE */}
        <h3>📌 Method 1: Using <code>if / else</code> Statements</h3>
        <p>
          Traditional JavaScript <code>if</code> and <code>else</code> can be used to determine which element to render. This is useful when the condition is more complex or when early returns are preferred.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const ConditionalRender = (props) => {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
};`}</code>
        </pre>

        {/* ELEMENT VARIABLE */}
        <h3>📌 Method 2: Using an Element Variable</h3>
        <p>
          You can define a variable to hold JSX content and assign it conditionally. This keeps your return statement cleaner and easier to read.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const ConditionalRender = (props) => {
  let content;
  if (props.isLoggedIn) {
    content = <h1>Welcome back!</h1>;
  } else {
    content = <h1>Please log in</h1>;
  }

  return <div>{content}</div>;
};`}</code>
        </pre>

        {/* TERNARY */}
        <h3>📌 Method 3: Ternary Operator</h3>
        <p>
          The ternary operator is a concise way to render elements based on simple true/false conditions. It works well for inline JSX decisions.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const ConditionalRender = (props) => {
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  );
};`}</code>
        </pre>

        {/* SHORT-CIRCUIT */}
        <h3>📌 Method 4: Short-Circuit <code>&&</code> Operator</h3>
        <p>
          Use the logical AND (<code>&&</code>) operator to render content only when a condition is true. This is great for single-condition rendering without needing an <code>else</code>.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const ConditionalRender = (props) => {
  return (
    <div>
      {props.isLoggedIn && <h1>Welcome back!</h1>}
      {!props.isLoggedIn && <h1>Please log in</h1>}
    </div>
  );
};`}</code>
        </pre>
      </section>

      {/* LIST RENDERING SECTION */}
      <section style={styles.section}>
        <h2>📋 2. List Rendering</h2>
        <p>
          List rendering allows you to display data-driven content like menus, product listings, or user comments. It’s commonly achieved using JavaScript's <code>map()</code> function.
        </p>

        {/* map() - SIMPLE LIST */}
        <h3>✅ Method 1: Using map() for Simple Lists</h3>
        <p>
          The <code>map()</code> method transforms each item in an array into a JSX element. You must assign a unique <code>key</code> to each element.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const ListRendering = () => {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
};`}</code>
        </pre>

        {/* map() - OBJECTS */}
        <h3>✅ Method 2: Rendering List of Objects</h3>
        <p>
          When working with arrays of objects, destructure properties inside <code>map()</code> to display meaningful information.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name} ({user.age})</li>
    ))}
  </ul>
);`}</code>
        </pre>

        {/* CONDITIONAL INSIDE MAP */}
        <h3>✅ Method 3: Conditional Rendering Within map()</h3>
        <p>
          You can use conditionals like ternary operators inside <code>map()</code> to customize output based on each item’s properties.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const users = [
  { id: 1, name: 'Alice', isActive: true },
  { id: 2, name: 'Bob', isActive: false },
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name} - {user.isActive ? 'Active' : 'Inactive'}
      </li>
    ))}
  </ul>
);`}</code>
        </pre>

        {/* NESTED DATA */}
        <h3>✅ Method 4: Nested List Rendering</h3>
        <p>
          For nested data (like categories with items), you can use nested <code>map()</code> calls to render sublists.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const categories = [
  { id: 1, name: 'Fruits', items: ['Apple', 'Banana'] },
  { id: 2, name: 'Vegetables', items: ['Carrot', 'Potato'] }
];

return (
  <ul>
    {categories.map(category => (
      <li key={category.id}>
        <strong>{category.name}</strong>
        <ul>
          {category.items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </li>
    ))}
  </ul>
);`}</code>
        </pre>

        {/* EMPTY LISTS */}
        <h3>✅ Method 5: Handling Empty Lists</h3>
        <p>
          Always check if your array is empty and display fallback UI to handle such cases gracefully.
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const items = [];

return (
  <ul>
    {items.length > 0
      ? items.map((item, i) => <li key={i}>{item}</li>)
      : <li>No items available</li>}
  </ul>
);`}</code>
        </pre>
      </section>

      {/* FILTER */}
      <section style={styles.section}>
        <h2>🔍 3. Filtering Lists</h2>
        <p>
          The <code>filter()</code> method helps you display only certain elements from an array based on a condition (like availability).
        </p>
        <pre style={styles.codeBlock}>
          <code>{`const products = [
  { id: 1, name: 'Laptop', available: true },
  { id: 2, name: 'Phone', available: false }
];

const availableProducts = products.filter(p => p.available);

return (
  <ul>
    {availableProducts.map(p => <li key={p.id}>{p.name}</li>)}
  </ul>
);`}</code>
        </pre>
      </section>
    </div>
  );
};

// Inline styles for readability
const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '30px',
    maxWidth: '900px',
    margin: 'auto',
    color: '#333',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '32px',
    color: '#007acc',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  codeBlock: {
    background: '#f4f4f4',
    padding: '16px',
    borderRadius: '6px',
    fontFamily: 'Courier New, monospace',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto',
  },
};

export default ConditionalRendering;
