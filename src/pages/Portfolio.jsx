//import the Project to display the projects on the page.
import Project from '../components/Project';

//display the 6 most recent projects I created on this page.
export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
        <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
        <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
        <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
        <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
        <Project projectImage="../assets/images/my_pic.jpg" imageTitle="test" linkDestination="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjFyLOp6c6CAxX7rYkEHcu_BaQQPAgJ" title="test" description="testing123" />
      </div>
    </div>
  );
}
