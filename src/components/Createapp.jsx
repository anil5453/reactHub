import React from 'react'
// import './Installation.css';

const Createapp = () => {
  return (
    <div className="tutorial-container">
      <h2>⚙ 2. Create a React App</h2>
      <p>Use the following command to create a new React application:</p>
      <h1>step 1</h1>
      <h2 className="step-title">Open Terminal / Command Prompt</h2>
      <img 
        src="https://global.discourse-cdn.com/codecademy/original/5X/7/b/1/0/7b104348a7705d60f6215d7425b6347e2f248999.png"
        alt="Open Terminal or Command Prompt" 
        className="step-image"
      />
      <p className="step-description">
        <strong>Description:</strong> Open Terminal (macOS/Linux) or Command Prompt (Windows).
        <br />
        You will use this to run commands for creating your React app.
      </p>
   {/* ----------------------------------------------------------------------------------------------------- */}
        
       <h1>Step 2</h1>
       <h2 className="step-title">✅Run Create App Command</h2>
       <div>
         <p><strong>Command to type:</strong></p>
        <pre className="terminal-box">npx create-react-app my-app</pre>
       </div>
      <img 
        src="https://global.discourse-cdn.com/codecademy/original/5X/7/b/1/0/7b104348a7705d60f6215d7425b6347e2f248999.png"
        alt="Run Create React App Command" 
        className="step-image"
      />
      <div className="step-description">
        <p>
          <strong>Description:</strong> This command initializes a new React app in a folder named <code>my-app</code>. It sets up the required file structure and installs all necessary dependencies.
        </p>
      </div>
   {/* ----------------------------------------------------------------------------------------------------- */}
       <h1>Step 3</h1>
      <h2 className="step-title">✅Navigate and Start</h2>
      <div>
       <p><strong>Command:</strong></p>
        <pre className="terminal-box">
         cd my-app<br />
         npm start
        </pre>
        </div>
        <div>
      <img 
        src="./photos/npm.png" 
        alt="Navigate to App Folder and Start Server" 
        className="step-image"
      /></div>
      <div className="step-description">
        <p>
          <strong>Description:</strong> This command navigates into the <code>my-app</code> folder and launches the React development server.
        </p>
      </div>
   {/* ----------------------------------------------------------------------------------------------------- */}
      <div>
        <h1>Step 4</h1>
        <h2 className="step-title">✅React App Running in Browser</h2>
      <img 
        src="https://global.discourse-cdn.com/codecademy/original/5X/9/1/f/5/91f5cfff06268af48dd0e2bd4deca539d62cfa81.png" 
        alt="React App Running in Browser" 
        className="step-image"
      />
      <div className="step-description">
        <p><strong>URL:</strong> <code>http://localhost:3000/</code></p>
        <p>
          <strong>Description:</strong> After starting the server, your browser opens this address. You'll see the default React page with a spinning logo and “Edit <code>src/App.js</code> and save to reload.”
        </p>
      </div>
      </div>
    </div>
  )
}

export default Createapp