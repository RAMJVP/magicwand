import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import './styles/main.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <header className="header">
        <button className="menu-toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>
      </header>
      <div className="app-container">
        {isSidebarOpen && <Sidebar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
