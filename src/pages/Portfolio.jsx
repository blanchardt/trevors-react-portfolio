//import the Project to display the projects on the page.
import Project from '../components/Project';

//display the 6 most recent projects I created on this page.
export default function Portfolio() {
  return (
    <div>
      <h2 className='pt-3 ps-5 pb-2'>Portfolio</h2>
      <div className='row'>
      <div className='col-1'></div>
        <div className='col-9 row'>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/JATE.png" imageTitle="Just Another Text Editor" linkDestination="https://trevors-web-text-editor-9ffa2909a838.herokuapp.com/" title="Web Text Editor" description="PWA / Node" gitHubRepo='https://github.com/blanchardt/trevors-web-text-editor' />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/get-all-users.png" imageTitle="Get all users" linkDestination="https://trevors-social-network-api-547bac35541a.herokuapp.com/" title="Social Network API" description="MongoDB / Mongoose / Node" gitHubRepo='https://github.com/blanchardt/trevors-social-network-api' />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/recipe-book.png" imageTitle="recipe home page" linkDestination="https://group-recipe-book-e481e1d25621.herokuapp.com/" title="Online Recipe Book" description="Multer / MVC / Node / SQL" gitHubRepo='https://github.com/blanchardt/group-recipe-book' />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/blog-post.png" imageTitle="blog post home page" linkDestination="https://trevors-blog-site-602922bbe279.herokuapp.com/" title="Blog Post" description="MVC / Node" gitHubRepo='https://github.com/blanchardt/trevors-blog-site' />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/products-get-all.png" imageTitle="get all products" linkDestination="https://github.com/blanchardt/trevors-backend-e-commerce" title="E-Commerce Backend" description="SQL / Node" gitHubRepo='https://github.com/blanchardt/trevors-backend-e-commerce' />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/viewing-tables.png" imageTitle="viewing all tables" linkDestination="https://github.com/blanchardt/trevors-company-manager" title="Company Manager" description="SQL / Node" gitHubRepo='https://github.com/blanchardt/trevors-company-manager' />
          </div>
        </div>
      </div>
    </div>
  );
}
