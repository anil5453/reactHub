import React from 'react';

const Routing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📍 Routing in React</h1>
      <p>
        Routing is the technique used in React applications to navigate between different views, components, or pages without reloading the browser. This is made possible by libraries like <strong>React Router</strong>, which handle dynamic and nested routes efficiently.
      </p>

      {/* 1. Installation */}
      <section style={styles.section}>
        <h2>🔧 1. Setting Up React Router</h2>
        <p>Install the required package using:</p>
        <pre style={styles.code}>npm install react-router-dom</pre>
        <p>This gives you access to essential components like <code>BrowserRouter</code>, <code>Route</code>, <code>Link</code>, <code>Navigate</code>, and more.</p>
      </section>

      {/* 2. Basic Routing */}
      <section style={styles.section}>
        <h2>📦 2. Basic Routing Example</h2>
        <p>A simple setup using <code>BrowserRouter</code>, <code>Routes</code>, and <code>Link</code>:</p>
        <pre style={styles.code}>
{`import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}`}
        </pre>
      </section>

      {/* 3. Dynamic Routing */}
      <section style={styles.section}>
        <h2>🧩 3. Dynamic Routing with Parameters</h2>
        <p>Route parameters allow you to pass dynamic values through URLs:</p>
        <pre style={styles.code}>
{`import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  return <h1>User Profile: {id}</h1>;
};`}
        </pre>
        <p>
          Access the <code>id</code> from the URL using <code>useParams()</code>. This is useful for profiles, product pages, etc.
        </p>
      </section>

      {/* 4. Redirecting */}
      <section style={styles.section}>
        <h2>➡️ 4. Redirecting Users</h2>
        <p>Use the <code>Navigate</code> component to redirect programmatically:</p>
        <pre style={styles.code}>
{`import { Navigate } from 'react-router-dom';

const Login = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  if (loggedIn) return <Navigate to="/home" />;
  
  return <button onClick={() => setLoggedIn(true)}>Login</button>;
};`}
        </pre>
        <p>This redirects the user to <code>/home</code> after logging in.</p>
      </section>

      {/* 5. Nested Routing */}
      <section style={styles.section}>
        <h2>📚 5. Nested Routing</h2>
        <p>Use nested <code>&lt;Route&gt;</code> for pages with sub-sections:</p>
        <pre style={styles.code}>
{`const Dashboard = () => (
  <>
    <nav>
      <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  </>
);`}
        </pre>
        <p>Nested routes are rendered inside a parent route such as <code>/dashboard</code>.</p>
      </section>

      {/* 6. 404 Not Found */}
      <section style={styles.section}>
        <h2>🚫 6. 404 Page (Catch-All Route)</h2>
        <p>
          To handle undefined routes, add a wildcard route <code>*</code>:
        </p>
        <pre style={styles.code}>
{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<NotFound />} />
</Routes>`}
        </pre>
        <p>This displays a fallback UI like "Page Not Found" when no route matches.</p>
      </section>

      {/* Additional Insights */}
      <section style={styles.section}>
        <h2>💡 Additional Notes</h2>
        <ul>
          <li><strong>useNavigate()</strong> - Programmatically navigate on actions like form submissions.</li>
          <li><strong>useLocation()</strong> - Get the current route path, search params, and hash.</li>
          <li><strong>Outlet</strong> - Used for rendering nested routes within layout components.</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '2rem',
    maxWidth: '1000px',
    margin: 'auto',
    background: '#f9fafb',
    color: '#333',
    lineHeight: 1.6,
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  section: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #e1e4e8',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  code: {
    background: '#f0f0f0',
    padding: '1rem',
    borderRadius: '6px',
    fontFamily: 'monospace',
    overflowX: 'auto',
    marginTop: '10px',
  },
};

export default Routing;
