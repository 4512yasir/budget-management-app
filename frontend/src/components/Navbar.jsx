import { Link } from 'react-router-dom';
import "../css/components.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FinTrack Pro</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
