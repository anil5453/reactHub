import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function TutorialList() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedTutorial = tutorials.find(t => t.title === topic);

  const handleSelect = (title) => {
    setSearchParams({ topic: title });
  };

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/06e0d2f1-620f-4db3-9383-126ddfc2b1e6');
        if (!response.ok) throw new Error('Failed to load tutorials.');
        const data = await response.json();
        setTutorials(data);
        if (!topic && data.length > 0) {
          setSearchParams({ topic: data[0].title });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorials();
  }, [topic, setSearchParams]);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Mobile menu toggle */}
        <div className="d-md-none text-start p-2 bg-success text-white">
          <button
            className="btn btn-light"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰ Menu
          </button>
        </div>

        {/* Sidebar */}
        <div className={`col-md-3 bg-dark text-white min-vh-100 ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}>
          <aside className="p-3">
            <h4 className="text-white mb-4">📘 React Course</h4>

            <nav className="mb-4">
              <Link to="/" className="d-block text-white mb-2">🏠 Home</Link>
              <Link to="/tutorials" className="d-block text-white mb-2">📘 Tutorials</Link>
            </nav>

            <div>
              <h5 className="text-info mb-2">🔩 Hook Tutorials</h5>
              {loading && <p>Loading...</p>}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && tutorials.map((tut) => (
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

        {/* Content area */}
        <div className="col-md-9 p-4">
          {loading ? (
            <p>Loading content...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : selectedTutorial ? (
            <div>
              <h2>{selectedTutorial.title}</h2>
              {/* Handle HTML or plain text */}
              <div dangerouslySetInnerHTML={{ __html: selectedTutorial.content }} />
            </div>
          ) : (
            <p>No tutorial selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TutorialList;
