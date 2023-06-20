import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-container">
      <h1 className="heading">
        <Link className="links" to="/">Math Magicians</Link>
      </h1>
      <ul className="nav-items">
        <li className="link-item">
          <Link className="links" to="/">Home |</Link>
        </li>
        <li className="link-item">
          <Link className="links" to="/calculator"> calculator |</Link>
        </li>
        <li className="link-item">
          <Link className="links" to="/quote"> Quote </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
