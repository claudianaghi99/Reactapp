import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dojo blog</h1>
      <div className="links">
        {/* with href not only in browser */}
        <Link to="/">Home</Link>
        <Link to="/create">New blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
