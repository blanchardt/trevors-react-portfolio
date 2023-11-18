//Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  //swap between the different pages and have a consistent header and footer for each page.
  return (
    <>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
