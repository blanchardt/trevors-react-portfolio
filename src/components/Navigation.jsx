import { Link } from 'react-router-dom';

//set up the navigation tabs that will be located in the header.
function Navigation() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className="nav-link"
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className="nav-link"
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className="nav-link"
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className="nav-link"
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
