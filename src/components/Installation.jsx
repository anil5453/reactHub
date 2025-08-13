import React from 'react';
// import './Installation.css'; // Importing external CSS
import { Link } from 'react-router-dom';


function Installation() {
  return (
    <div className="tutorial-container">
      <h2>📌 1. Prerequisites</h2>
      <p>Make sure you have the following installed:</p>
    
        
          <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
            Node.js
          </a>
          <h1>Step 1</h1>
      <h2 className="node-title">🧩 Node.js Installation Step</h2>
      <p className="node-info">
        Go to <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js official site</a> 
        and download the LTS version.
      </p>
      <img 
        src="./photos/nodejs.png"
        alt="Node.js download page" 
        className="node-image"
      />
   {/* ----------------------------------------------------------------------------------------------------- */}
      <h1>Step 2</h1>
      <h2 className="step-title">Node.js Installer Window</h2>
      <p className="step-description">
        After the download finishes, double-click the installer.<br />
        The installer window will open — just click <strong>Next</strong> to proceed.
      </p>
      <img 
        src="./photos/nodejs2.png" 
        alt="Node.js Installer Window" 
        className="step-image"
      />
   {/* ----------------------------------------------------------------------------------------------------- */}
      <h1>Step 3</h1>
      <h2 className="step-title">Select Components</h2>
      <p className="step-description">
        Keep all options selected by default.<br />
        ✅ Click <strong>Next</strong> to continue the installation.
      </p>
      <img 
        src="https://treehouse.github.io/installation-guides/windows/imgs/node-win-installer.png" 
        alt="Node.js Select Components Window" 
        className="step-image"
      />
   {/* ----------------------------------------------------------------------------------------------------- */} 
      <h1>Step 4</h1> 
      <h2 className="step-title">Installation Complete</h2>
      <p className="step-description">
        Installation successful! 🎉<br />
        ✅ Click <strong>Finish</strong> to close the setup wizard.
      </p>
      <img 
        src="https://kinsta.com/wp-content/uploads/2021/09/finish-Node.js-installation-on-windows.png"
        alt="Node.js Installation Complete" 
        className="step-image"
      />
   {/* ----------------------------------------------------------------------------------------------------- */}
     <h1>Step 5</h1>        
      <h2 className="step-title">Verify Installation</h2>
      <img 
        src="https://treehouse.github.io/installation-guides/windows/imgs/node-win-verify.png" 
        alt="Verify Node.js Installation" 
        className="step-image"
      />
      <div className="step-description">
        <p>Open <strong>Command Prompt</strong> or <strong>Terminal</strong>.</p>
        <p>Type the following commands:</p>
        <pre className="terminal-box">
         node -v<br />
         npm -v
        </pre>
        <p>You’ll see something like:</p>
        <pre className="terminal-box">
        v20.11.1<br />
         9.6.7
        </pre>
        
      </div >
      <div>
      <Link to="/Createapp" className="next-button " >Next →</Link>
      </div>
   {/* ----------------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default Installation;