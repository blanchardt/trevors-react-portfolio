//Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  //swap between the different pages and have a consistent header and footer for each page.
  return (
    <>
      <div className='page-content'>
        <Header />
        <main className="mx-3 pb-5">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
