// src/pages/DestructuringExample.js
import React, { useState } from 'react';
// import MonacoCodeEditor from '../components/MonacoCodeEditor';

/**
 * A presentational component that demonstrates
 * destructuring of props.
 */
function ProfileCard({ name, age, profession }) {
  return (
    <div className='container' style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

/**
 * This component demonstrates both state and object destructuring
 * and renders the ProfileCard component using destructured props.
 */
function DestructuringExample() {
  const [user, setUser] = useState({
    name: 'Alice',
    age: 28,
    profession: 'Frontend Developer',
  });

  const { name, age, profession } = user;

  return (
    <div style={styles.container}>
      <h1>React Destructuring Example</h1>
      <p>
        Destructuring allows you to extract values from an object or array and assign them to variables. 
        It simplifies the process of accessing values in an object or array, and is particularly useful 
        when dealing with props and state in React.
      </p>
      <p>
        This example demonstrates how to use <strong>destructuring</strong> in React with:
      </p>
      <ul>
        <li><strong>Props Destructuring</strong> in the <code>ProfileCard</code> component</li>
        <li><strong>State Destructuring</strong> inside the <code>DestructuringExample</code> component</li>
      </ul>

      {/* Demo of destructuring in functional component */}
      <div>
        <h3>Destructuring Props in Function Parameters</h3>
        <p className='terminal-box1 w-50'>
          <code>{`const Demo = ({ name, city }) => {
  return <h1>Hello {name} from {city}</h1>;
};`}
          </code>
        </p>
        <h5>This method extracts the name and city properties directly in the function parameter.</h5>
      </div>

      {/* Demo of destructuring inside function body */}
      <div>
        <h4>Destructuring Inside the Function Body</h4>
        <code className='terminal-box1'>
          {`const Demo = (props) => {
  const { name, city } = props;
  return <h1>Hello {name} from {city}</h1>;
};`}
        </code>
      </div>

      {/* Class component destructuring */}
      <div>
        <h3 className='mt-5'>Class Component (Destructuring in render method)</h3>
        <p>In class components, you can destructure <code>this.props</code> within the render method:</p>
        <pre style={styles.codeBlock}>
          <code>{`class Demo1 extends Component {
  render() {
    const { name, city } = this.props;
    return <h1>Hello {name} from {city}</h1>;
  }
}`}
          </code>
        </pre>
      </div>

      {/* Render ProfileCard using destructured state */}
      <ProfileCard name={name} age={age} profession={profession} />

      {/* Live Code Editor Section */}
      {/* <div style={{ marginTop: '40px' }}>
        <h3>Try It Yourself 👇</h3>
        <LiveCodeEditor
          code={`function Demo({ name, city }) {
  return <h1>Hello {name} from {city}</h1>;
}

render(<Demo name="Anil" city="Hyderabad" />);`}
        />
      </div> */}
<div>
  {/* <MonacoCodeEditor /> */}

</div>
    </div>
  );
}

// Basic styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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

export default DestructuringExample;
