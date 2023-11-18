import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Page Not Found</h1>
      <p>Error: 404</p>
      <p>Please return to the Home page and try again, <Link key={1} to="/">Home</Link></p>
    </div>
  );
}
