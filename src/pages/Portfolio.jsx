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
            <Project projectImage="../assets/images/JATE.png" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" gitHubRepo='https://github.com/blanchardt'/>
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
          </div>
          <div className='col-6 pb-4'>
            <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
          </div>
        </div>
      </div>
    </div>
  );
}
