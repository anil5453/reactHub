// src/components/HooksDeepDive.js
import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createContext,
  useContext,
} from "react";

/**
 * HooksDeepDive
 * A large, self-contained learning page with:
 * - deep explanations for each major hook
 * - code snippets to read
 * - small interactive demos to try them
 *
 * No console.log usage — everything visible in the UI for students.
 */

//////////////////////
// Helper: CodeBlock //
//////////////////////
function CodeBlock({ children }) {
  return (
    <pre
      style={{
        background: "#0b1220",
        color: "#d6e9ff",
        padding: "12px",
        borderRadius: "6px",
        overflowX: "auto",
        fontSize: "13px",
        lineHeight: "1.45",
      }}
    >
      <code>{children}</code>
    </pre>
  );
}

/////////////////////////
// 1) useState Example //
/////////////////////////
function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <section style={styles.section}>
      <h3>1. useState — local state in functional components</h3>

      <p style={styles.paragraph}>
        <strong>Concept:</strong> `useState` lets you add React state to function components.
        Call it with the initial state value and it returns a pair — the current
        state and a function to update it: <code>const [state, setState] = useState(initial)</code>.
      </p>

      <p style={styles.paragraph}>
        <strong>When to use:</strong> any time a component needs to remember information
        between renders: counters, form fields, toggle flags, etc.
      </p>

      <CodeBlock>
{`// Basic useState example
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}
      </CodeBlock>

      <div style={styles.demoBox}>
        <div style={{ marginBottom: 10 }}>
          <strong>Interactive demo:</strong>
        </div>
        <div style={{ marginBottom: 10 }}>
          <button style={styles.btn} onClick={() => setCount(c => c + 1)}>
            Increment
          </button>{" "}
          <button style={styles.btn} onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>
            Name:{" "}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type name"
            />
          </label>
        </div>

        <div style={styles.infoBox}>
          <div>Count (state): <strong>{count}</strong></div>
          <div>Typed name (state): <strong>{name || "(empty)"}</strong></div>
        </div>

        <p style={styles.detail}>
          <strong>Important:</strong> calling the setter (e.g. <code>setCount</code>) causes
          React to schedule a re-render. Updates are batched and can be asynchronous;
          when new state depends on previous state prefer the function form:
          <code>setCount(prev = prev + 1)</code>.
        </p>
      </div>
    </section>
  );
}

/////////////////////////
// 2) useEffect Demo   //
/////////////////////////
function UseEffectDemo() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  // Timer effect - demonstrates mount, cleanup, and dependencies
  useEffect(() => {
    if (!running) return undefined; // don't start unless running
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    // cleanup runs on unmount or before this effect runs again
    return () => clearInterval(timer);
  }, [running]); // depend on `running`

  // Simulated fetch effect (cancellable)
  useEffect(() => {
    if (!url) return;
    let cancelled = false;
    setLoading(true);
    setData(null);
    // simulate network request
    const id = setTimeout(() => {
      if (!cancelled) {
        setData({ result: `Fake data for "${url}" (loaded)` });
        setLoading(false);
      }
    }, 1200);

    return () => {
      cancelled = true;
      clearTimeout(id);
      setLoading(false);
    };
  }, [url]);

  return (
    <section style={styles.section}>
      <h3>2. useEffect — side effects & lifecycle in functions</h3>
      <p style={styles.paragraph}>
        <strong>Concept:</strong> `useEffect` runs after render. It replaces many lifecycle
        patterns from class components (componentDidMount, componentDidUpdate, componentWillUnmount).
        You pass a function; it can optionally return a cleanup function.
      </p>

      <p style={styles.paragraph}>
        <strong>Rules & tips:</strong> Always provide the dependency array to control when the effect runs:
        <code>useEffect(fn, [dep1, dep2])</code>. An empty array runs only once on mount.
      </p>

      <CodeBlock>
{`// Timer with cleanup
useEffect(() => {
  const id = setInterval(() => setSeconds(s => s + 1), 1000);
  return () => clearInterval(id); // cleanup on unmount
}, []);`}
      </CodeBlock>

      <div style={styles.demoBox}>
        <div style={{ marginBottom: 8 }}>
          <strong>Timer demo (useEffect):</strong>
        </div>
        <div style={{ marginBottom: 8 }}>
          <button style={styles.btn} onClick={() => setRunning(true)}>Start</button>{" "}
          <button style={styles.btn} onClick={() => setRunning(false)}>Stop</button>{" "}
          <button style={styles.btn} onClick={() => { setSeconds(0); setRunning(false); }}>Reset</button>
        </div>
        <div style={styles.infoBox}><div>Seconds: <strong>{seconds}</strong></div><div>Running: <strong>{running ? "Yes" : "No"}</strong></div></div>

        <hr style={{ margin: "12px 0" }} />

        <div style={{ marginBottom: 8 }}>
          <strong>Simulated fetch demo (cleanup example):</strong>
        </div>
        <div style={{ marginBottom: 8 }}>
          <input
            placeholder="type url to fetch (simulated)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ width: 320 }}
          />
          <button style={styles.btn} onClick={() => setUrl(url)}>Fetch</button>
        </div>
        <div style={styles.infoBox}>
          <div>Loading: <strong>{loading ? "Yes" : "No"}</strong></div>
          <div>Data: <strong>{data ? JSON.stringify(data) : "(none)"}</strong></div>
        </div>

        <p style={styles.detail}>
          <strong>Gotchas:</strong> Effects capture values from render where they were created. To avoid stale closures,
          include dependencies correctly. For data fetching, cancel requests on cleanup to avoid updating unmounted components.
        </p>
      </div>
    </section>
  );
}

/////////////////////////
// 3) useContext Demo  //
/////////////////////////
const ThemeContext = createContext({ theme: "light", toggle: () => {} });

function UseContextDemo() {
  // local provider state
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <section style={styles.section}>
      <h3>3. useContext — share data without prop-drilling</h3>

      <p style={styles.paragraph}>
        <strong>Concept:</strong> `useContext` reads the current value of a context
        created with `createContext`. Use a Provider to supply the value to many
        nested components, avoiding passing props manually through every level.
      </p>

      <CodeBlock>
{`// Create Context
const ThemeContext = createContext('light');

// Provider wraps tree and supplies value:
<ThemeContext.Provider value={...}>
  <App />
</ThemeContext.Provider>

// Consumer inside a function component:
const theme = useContext(ThemeContext);
`}
      </CodeBlock>

      <div style={styles.demoBox}>
        <div style={{ marginBottom: 8 }}>
          <strong>Theme provider demo</strong>
        </div>

        <div style={{ marginBottom: 8 }}>
          <button style={styles.btn} onClick={toggle}>Toggle Theme</button>
        </div>

        <ThemeContext.Provider value={{ theme, toggle }}>
          <ThemeConsumerExample />
        </ThemeContext.Provider>

        <p style={styles.detail}>
          Use context for data that many components need — e.g., theme, authenticated user,
          locale. But avoid using it as a global state manager for everything.
        </p>
      </div>
    </section>
  );
}

function ThemeConsumerExample() {
  const { theme, toggle } = useContext(ThemeContext);
  const containerStyle = { padding: 12, borderRadius: 6, background: theme === "dark" ? "#222" : "#fff", color: theme === "dark" ? "#fff" : "#000", marginTop: 8 };

  return (
    <div style={containerStyle}>
      <div>Current theme (from context): <strong>{theme}</strong></div>
      <div style={{ marginTop: 8 }}>
        <button style={styles.btn} onClick={toggle}>Toggle from Consumer</button>
      </div>
    </div>
  );
}

/////////////////////////
// 4) useRef Demo      //
/////////////////////////
function UseRefDemo() {
  const inputRef = useRef(null);
  const renderCountRef = useRef(0);
  const [renderTrigger, setRenderTrigger] = useState(0);
  renderCountRef.current += 1;

  // previous value example
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);
  useEffect(() => { prevCountRef.current = count; }, [count]);

  return (
    <section style={styles.section}>
      <h3>4. useRef — accessing DOM & holding mutable values</h3>

      <p style={styles.paragraph}>
        <strong>Concept:</strong> `useRef` returns a mutable object whose <code>current</code> property persists
        for the full lifetime of the component and can be changed without causing re-renders.
        It's used for DOM access (e.g., focus), storing previous values, or keeping any mutable value.
      </p>

      <CodeBlock>
{`// DOM access:
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();

// Mutable storage:
const countRef = useRef(0);
countRef.current += 1; // changing this doesn't re-render
`}
      </CodeBlock>

      <div style={styles.demoBox}>
        <div style={{ marginBottom: 8 }}>
          <button style={styles.btn} onClick={() => inputRef.current && inputRef.current.focus()}>Focus input</button>
        </div>

        <div style={{ marginBottom: 8 }}>
          <input ref={inputRef} placeholder="click Focus input" />
        </div>

        <div style={{ marginBottom: 8 }}>
          <button style={styles.btn} onClick={() => setRenderTrigger(r => r + 1)}>Cause Re-render</button>{" "}
          <span style={{ marginLeft: 8 }}>Renders: <strong>{renderCountRef.current}</strong></span>
        </div>

        <div style={{ marginTop: 8 }}>
          <div>Count (state): <strong>{count}</strong></div>
          <div>Previous count (ref): <strong>{prevCountRef.current}</strong></div>
          <div style={{ marginTop: 8 }}>
            <button style={styles.btn} onClick={() => setCount(c => c + 1)}>Increment Count</button>
          </div>
        </div>

        <p style={styles.detail}>
          <strong>Key point:</strong> updating a ref does not cause a re-render. Use refs for values you want to persist
          but that don't need to drive UI directly.
        </p>
      </div>
    </section>
  );
}

/////////////////////////
// 5) useReducer Demo  //
/////////////////////////
function UseReducerDemo() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "set":
        return { ...state, count: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <section style={styles.section}>
      <h3>5. useReducer — complex state logic</h3>
      <p style={styles.paragraph}>
        <strong>Concept:</strong> `useReducer` manages state transitions with a reducer function,
        similar to Redux but local to the component. It is excellent when state updates are complex,
        or when next state depends on previous state and many actions exist.
      </p>

      <CodeBlock>
{`const [state, dispatch] = useReducer(reducer, initialState);
// dispatch({ type: 'increment' })
// reducer handles transitions in a single place
`}
      </CodeBlock>

      <div style={styles.demoBox}>
        <div style={{ marginBottom: 8 }}>
          <button style={styles.btn} onClick={() => dispatch({ type: "decrement" })}>-</button>{" "}
          <span style={{ margin: "0 10px" }}>Count: <strong>{state.count}</strong></span>{" "}
          <button style={styles.btn} onClick={() => dispatch({ type: "increment" })}>+</button>{" "}
          <button style={styles.btn} onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>

        <div style={{ marginTop: 10 }}>
          <label>
            Set value:{" "}
            <input
              type="number"
              onBlur={(e) => dispatch({ type: "set", payload: Number(e.target.value || 0) })}
              defaultValue={state.count}
            />
            <span style={{ fontSize: 12, marginLeft: 8 }}>(type value then blur)</span>
          </label>
        </div>

        <p style={styles.detail}>
          <strong>Why useReducer?</strong> It centralizes state updates and makes changes explicit and testable.
          For complicated state logic (multiple sub-values, many action types), prefer <code>useReducer</code> over many
          <code>useState</code> calls.
        </p>
      </div>
    </section>
  );
}

/////////////////////////
// 6) Custom Hook Demo //
/////////////////////////
function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  useEffect(() => {
    function onResize() { setWidth(window.innerWidth); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

function CustomHookDemo() {
  const width = useWindowWidth();

  return (
    <section style={styles.section}>
      <h3>6. Custom Hooks — extract & reuse logic</h3>
      <p style={styles.paragraph}>
        <strong>Concept:</strong> Custom hooks are JavaScript functions whose name starts with <code>use</code>.
        They allow you to extract stateful logic from components and reuse it across your app. A custom hook
        can call other hooks (useState, useEffect, etc.) and return any values the consumer needs.
      </p>

      <CodeBlock>
{`// Example custom hook: useWindowWidth
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}`}
      </CodeBlock>

      <div style={styles.demoBox}>
        <div>Window width (custom hook): <strong>{width}px</strong></div>
        <p style={styles.detail}>
          <strong>Best practices for custom hooks:</strong>
          <ul>
            <li>Name must start with <code>use</code>.</li>
            <li>Keep them focused (one responsibility).</li>
            <li>Return only the values the consumer needs.</li>
            <li>Write tests for them — they are pure logic layers.</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

/////////////////////////
// Rules of Hooks & Summary
/////////////////////////
function HooksSummary() {
  return (
    <section style={styles.section}>
      <h3>Rules of Hooks & Practical Tips</h3>

      <ul>
        <li><strong>Only call hooks at the top level:</strong> don’t call hooks inside loops, conditions, or nested functions.</li>
        <li><strong>Only call hooks from React functions:</strong> either functional components or custom hooks.</li>
        <li><strong>Always include dependencies:</strong> list every external value used in an effect to avoid bugs (or consciously omit with comment).</li>
        <li><strong>Prefer small focused hooks:</strong> compose them to build complexity instead of one monolithic hook.</li>
      </ul>

      <h4>Cheat sheet (quick signatures)</h4>
      <CodeBlock>
{`useState(initial) => [state, setState]
useEffect(effectFn, depsArray)
useContext(MyContext) => currentValue
useRef(initial) => { current: ... }
useReducer(reducer, initialState) => [state, dispatch]`}
      </CodeBlock>

      <p style={styles.detail}>
        Hooks change how you structure React apps: they promote composition, make logic reusable,
        and let you keep components small and focused. Use them to replace lifecycle methods and local state
        with clearer, testable functions.
      </p>
    </section>
  );
}

/////////////////////
// Main Component  //
/////////////////////
export default function HooksDeepDive() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>React Hooks — Deep Dive</h1>
      <p style={styles.lead}>
        Hooks are the modern way to manage state and side-effects inside React function components.
        Below you will find an in-depth study of the main hooks: concept, examples, interactive demos,
        best practices and gotchas.
      </p>

      <UseStateDemo />
      <UseEffectDemo />
      <UseContextDemo />
      <UseRefDemo />
      <UseReducerDemo />
      <CustomHookDemo />
      <HooksSummary />

      <footer style={{ marginTop: 30, fontSize: 13, color: "#555" }}>
        Tip: Encourage students to experiment with these demos — change values and dependencies to see
        how behavior changes. Hooks are learned best by tinkering.
      </footer>
    </div>
  );
}

/* ---------- styles ---------- */
const styles = {
  page: {
    fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
    color: "#1e293b",
    padding: 24,
    maxWidth: 980,
    margin: "0 auto",
  },
  title: {
    fontSize: 28,
    marginBottom: 6,
  },
  lead: {
    marginBottom: 18,
    color: "#334155",
  },
  section: {
    marginBottom: 22,
    padding: 14,
    borderRadius: 8,
    background: "#fff",
    boxShadow: "0 1px 1px rgba(0,0,0,0.03)",
  },
  paragraph: {
    color: "#334155",
  },
  demoBox: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    background: "#f8fafc",
    border: "1px solid #e6eef6",
  },
  btn: {
    padding: "6px 10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    marginRight: 6,
  },
  infoBox: {
    marginTop: 10,
    padding: 8,
    borderRadius: 6,
    background: "#ffffff",
    border: "1px solid #e6eef6",
  },
  detail: {
    marginTop: 10,
    color: "#374151",
    fontSize: 14,
  },
};
