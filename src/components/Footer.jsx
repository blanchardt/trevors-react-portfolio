import { Link } from 'react-router-dom';

//create the footer which contains links to my linkedin and github pages.
function Footer() {
  return (
    <footer className='pb-2'>
      <Link to="https://github.com/blanchardt" className='pe-5'>
        <img
          alt="GitHub"
          className="footer-img-links"
          src="../assets/images/github-mark.png"
        />
      </Link>
      <Link to="https://github.com/blanchardt">
        <img
          alt="LinkedIn"
          className="footer-img-links"
          src="../assets/images/LI-In-Bug.png"
        />
      </Link>
    </footer>
  );
}

export default Footer;
