import { Link } from 'react-router-dom';

//display a given project onto the page when called.
function Project({ projectImage, imageTitle, linkDestination, title, description}) {
  return(
    <div>
      <Link to={linkDestination}>
        <div>
          <img src={projectImage} alt={imageTitle} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Project;
