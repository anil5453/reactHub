import React from 'react';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Link } from 'react-router-dom';

// JS (must be AFTER CSS)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Form from './components/Form';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorialList from "./components/TutorialList";
import HeaderRe from "./components/HeaderRe"
import FooterRe from "./components/FooterRe"
import Createapp from './components/Createapp';
import Installation from './components/Installation';
import Clstuto from './components/Clstuto';
import DestructuringExample from './components/DestructuringExample'
import ConditionalRendering from './components/ConditionalRendering';
import LifecycleOfReact from './components/LifecycleofReact';
import Routing from './components/Routing';
import Exports from './components/Exprots';
import EventBinding from './components/EventBinding';
import Props from './components/Props';
import Home from './components/Home';

// import LiveCodeEditor from './components/LiveCodeEditor';


// import { Axios } from './NewProject/Components/axios';

function App() {
  return (
    <Router>
      <HeaderRe />
      <main style={{ padding: '30px' }}>
        {/* <Home /> */}
        <Routes>
          {/* <Route path='/TutorialList' element={<TutorialList />} /> */}
       <Route path="/" element={<Home/>} />
          <Route path="/TutorialList" element={<TutorialList/>} />
          <Route path='/Createapp' element={<Createapp/>}/>
          <Route path='/Installation' element={<Installation/>}/>
          <Route path='/Clstuto' element={<Clstuto/>}/>
          <Route path='/DestructuringExample' element={<DestructuringExample/>}/>
          <Route path='/ConditionalRendering' element={<ConditionalRendering/>}/>
          <Route path='/LifecycleOfReact' element={<LifecycleOfReact/>}/>
          <Route path='/Routing' element={<Routing/>}/>
          <Route path='/Exports' element={<Exports/>}/>
          <Route path='/EventBinding' element={<EventBinding/>}/>
                    <Route path='/Props' element={<Props/>}/>
                    {/* <Route path='/LiveCodeEditor' element={<LiveCodeEditor/>}/> */}




 
        </Routes>
      </main>
      <FooterRe />
      
      
      
    </Router>
    // <Axios/>
  );
}
{/* <Form/> */}

export default App;































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
