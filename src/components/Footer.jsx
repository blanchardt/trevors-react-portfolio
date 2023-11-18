import { Link } from 'react-router-dom';

//create the footer which contains links to my linkedin and github pages.
function Footer() {
  return (
    <footer>
      <Link to="https://github.com/blanchardt">
        <img
          alt="GitHub"
          className="img-fluid"
          src="../assets/images/github-mark.png"
        />
      </Link>
      <Link to="https://github.com/blanchardt">
        <img
          alt="LinkedIn"
          className="img-fluid"
          src="../assets/images/LI-In-Bug.png"
        />
      </Link>
    </footer>
  );
}

export default Footer;
