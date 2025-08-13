import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LifecycleOfReact from './LifecycleofReact';
import EventBinding from './EventBinding';
import Clstuto from './Clstuto';
import ConditionalRendering from './ConditionalRendering';
import Exports from './Exprots';
import Installation from './Installation';
import DestructuringExample from './DestructuringExample';
import Routing from './Routing';
import Props from './Props';
import Createapp from './Createapp';
import ComponentComparison from './ComponentComparison';
import JSXDemo from './JsxDemo';
import StateVsPropsDemo from './StateVsPropsDemo';
import EventHandlingDemo from './EventHandler';
import HooksOverview from './Hooks';
import HooksDeepDive from './HookExamples';
import Notes from './Notes';


const tutorials = [
 
  {
    id: '1',
    title: 'How to install the react',
    content: <Installation/>,
  },
  {
    id:'2',
    title: 'Create_App',
    content:<Createapp />
  },
  {id:'3',
    title:'Know about JSX ',
    content: <JSXDemo />
  },
  {
    id: '4',
    title: 'Class Component',
    content: <Clstuto />,
  },
  {id:'5',
    title:'ComponentComparison',
    content: <ComponentComparison />
  },
  
  {
    id: '6',
    title: 'Conditional Rendering',
    content: <ConditionalRendering />,
  },
  {
    id: '7',
    title: 'Event binding',
    content: <EventBinding />,
  },
  {id:'8',
  title: 'Event Handling',
  content:<EventHandlingDemo />
},
{
  id: '9',
  title: 'Destructring',
  content: <DestructuringExample />,
},
{
  id: '10',
  title: 'What is export',
  content: <Exports />,
},
{
    id: '11',
    title: 'LIFECYCLE',
    content: <LifecycleOfReact />,
    },




  {
    id: '12',
    title: 'what is props',
    content: <Props/>,
  },
  {id:'13',
    title:'State',
    content: <StateVsPropsDemo />
  },
  {
    id: '14',
    title: 'Routing',
    content: <Routing />,
  },

  {id:'15',
    title: 'HOOKS',
    content: <HooksOverview />
  },
  {
    id:'16',
    title: 'Hooks Examples',
    content: <HooksDeepDive /> 
  },
  {
    id:'16',
    title: 'Notes by Mr.Dinesh',
    content: <Notes /> 
  },
  
];

function TutorialList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic');

  const selectedTutorial = tutorials.find(t => t.title === topic);

  const handleSelect = (title) => {
    setSearchParams({ topic: title });
  };

  useEffect(() => {
    if (!topic && tutorials.length > 0) {
      setSearchParams({ topic: tutorials[0].title });
    }
  }, [topic, setSearchParams]);

  return (
    <div className="container-fluid bg-info-subtle rounded-5">
      <div className="row">
        {/* Toggle Button for Small Screens */}
        <div className="d-md-none text-start p-2 bg-success text-white">
          <button
            className="btn btn-light"
            onClick={() => setSidebarOpen(prev => !prev)}
          >
            ☰ Menu
          </button>
        </div>

        {/* Sidebar - col-3 */}
        <div className={`col-md-3 bg-dark text-white min-vh-100 ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}>
          <aside className="p-3">
            <h4 className="text-white mb-4">📘 React Course</h4>

            {/* Navigation Links */}
            <nav className="mb-4">
              <Link to="/" className="d-block text-white mb-2 p-1 "><button className='btn btn-outline-info ms-5 fs-5 rounded-5'>🏠 Home</button></Link>
              {/* <Link to="/tutorials" className="d-block text-white mb-2">📘 Tutorials</Link> */}
            </nav>

            {/* Tabs Instead of Dropdown */}
            <div>
              <h5 className="text-info mb-2">🔩 Hook Tutorials</h5>
              {tutorials.map((tut) => (
                <button
                  key={tut.id}
                  onClick={() => handleSelect(tut.title)}
                  className={`btn w-100 text-start mb-2 ${
                    topic === tut.title ? 'btn-info text-white fw-bold' : 'btn-outline-light'
                  }`}
                >
                  ▶️ {tut.title}
                </button>
              ))}
            </div>
          </aside>
        </div>

        {/* Content Area - col-9 */}
        <div className="col-md-9 p-4">
          {selectedTutorial ? (
            <div>
              <h2>{selectedTutorial.title}</h2>
              {typeof selectedTutorial.content === 'string' ? (
                <p>{selectedTutorial.content}</p>
              ) : (
                <div>{selectedTutorial.content}</div>
              )}
            </div>
          ) : (
            <p>Select a tutorial from the sidebar.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TutorialList;
