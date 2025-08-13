import React from 'react';

const LifecycleOfReact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🔄 Lifecycle of React (Class Components)</h1>
      <p>
        React class components go through a series of stages during their existence — from being created and mounted in the DOM to being updated and finally removed. These stages are broken down into four main phases:
      </p>

      {/* 1. Mounting */}
      <section style={styles.section}>
        <h2>📌 1. Mounting Phase</h2>
        <p>This is the phase when the component is first initialized and inserted into the DOM.</p>

        <h4>🔹 constructor()</h4>
        <p>Used to initialize state and bind event handlers. Avoid side effects like API calls.</p>
        <pre style={styles.codeBlock}>
{`constructor(props) {
  super(props);
  this.state = { count: 0 };
}`}
        </pre>

        <h4>🔹 static getDerivedStateFromProps()</h4>
        <p>Called before every render (including the first). It’s used to update the state based on changes in props.</p>
        <pre style={styles.codeBlock}>
{`static getDerivedStateFromProps(props, state) {
  if (props.value !== state.value) {
    return { value: props.value };
  }
  return null;
}`}
        </pre>

        <h4>🔹 render()</h4>
        <p>Required method. It returns the JSX to render the UI.</p>
        <pre style={styles.codeBlock}>
{`render() {
  return <h1>Hello, World!</h1>;
}`}
        </pre>

        <h4>🔹 componentDidMount()</h4>
        <p>Invoked after the component is mounted. Great for API calls or subscriptions.</p>
        <pre style={styles.codeBlock}>
{`componentDidMount() {
  console.log('Component mounted');
}`}
        </pre>
      </section>

      {/* 2. Updating */}
      <section style={styles.section}>
        <h2>🔁 2. Updating Phase</h2>
        <p>This occurs when a component’s state or props are changed, triggering a re-render.</p>

        <h4>🔹 static getDerivedStateFromProps()</h4>
        <p>Called again on every update, same as in the mounting phase.</p>

        <h4>🔹 shouldComponentUpdate()</h4>
        <p>
          Used for performance optimization. Return <code>false</code> to prevent a re-render.
        </p>
        <pre style={styles.codeBlock}>
{`shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}`}
        </pre>

        <h4>🔹 render()</h4>
        <p>Re-renders UI based on updated state/props.</p>

        <h4>🔹 getSnapshotBeforeUpdate()</h4>
        <p>Called right before the DOM updates. Use this to capture info (e.g., scroll position).</p>
        <pre style={styles.codeBlock}>
{`getSnapshotBeforeUpdate(prevProps, prevState) {
  return { scrollPosition: window.scrollY };
}`}
        </pre>

        <h4>🔹 componentDidUpdate()</h4>
        <p>
          Called after DOM updates. Use it for side effects like network requests based on the update.
        </p>
        <pre style={styles.codeBlock}>
{`componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot) {
    console.log('Scroll before update:', snapshot.scrollPosition);
  }
}`}
        </pre>
      </section>

      {/* 3. Unmounting */}
      <section style={styles.section}>
        <h2>❌ 3. Unmounting Phase</h2>
        <p>This phase is triggered just before a component is removed from the DOM.</p>

        <h4>🔹 componentWillUnmount()</h4>
        <p>Perfect place to clean up timers, subscriptions, or event listeners.</p>
        <pre style={styles.codeBlock}>
{`componentWillUnmount() {
  console.log('Component will unmount');
}`}
        </pre>
      </section>

      {/* 4. Error Handling */}
      <section style={styles.section}>
        <h2>🚨 4. Error Handling Phase</h2>
        <p>Used to handle errors during rendering or lifecycle methods.</p>

        <h4>🔹 static getDerivedStateFromError()</h4>
        <p>Updates state when a child component throws an error. Useful for showing fallback UI.</p>
        <pre style={styles.codeBlock}>
{`static getDerivedStateFromError(error) {
  return { hasError: true };
}`}
        </pre>

        <h4>🔹 componentDidCatch()</h4>
        <p>Logs error info or reports to an error tracking service.</p>
        <pre style={styles.codeBlock}>
{`componentDidCatch(error, info) {
  console.error('Caught error:', error, info);
}`}
        </pre>
      </section>
    </div>
  );
};

// Styles for better readability
const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '30px',
    lineHeight: '1.6',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#fefefe',
    color: '#333',
  },
  heading: {
    fontSize: '28px',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  section: {
    marginTop: '30px',
    padding: '20px',
    background: '#f4f6f8',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  codeBlock: {
    backgroundColor: '#dfe5ecff',
    padding: '10px 15px',
    borderRadius: '15px',
    marginTop: '10px',
    fontFamily: 'Courier New, monospace',
    fontSize: '14px',
    overflowX: 'auto',
  },
};

export default LifecycleOfReact;
