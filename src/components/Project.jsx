import { Link } from 'react-router-dom';

//display a given project onto the page when called.
function Project({ projectImage, imageTitle, linkDestination, title, description, gitHubRepo}) {
  return(
    <div>
      <Link to={linkDestination} className='project-link'>
        <div className='project-background'>
          <img src={projectImage} alt={imageTitle} className='project-image'/>
        </div>
        <div className='project-info'>
          <Link to={gitHubRepo} className='project-title'>{title} <img src='../assets/images/github-mark.png' alt='GitHub' className='project-git'/></Link>
          <p className='project-description'>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Project;
