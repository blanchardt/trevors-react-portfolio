import { Link, useLocation } from 'react-router-dom';

//set up the navigation tabs that will be located in the header.
function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav right-nav">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active custom-nav' : 'nav-link custom-nav'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active custom-nav' : 'nav-link custom-nav'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active custom-nav' : 'nav-link custom-nav'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item me-2">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active custom-nav' : 'nav-link custom-nav'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
