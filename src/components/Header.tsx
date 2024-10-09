import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <h1>My React Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
