//import the navigation tabs
import Nav from './Navigation';
//create the header which contains my name and the navigation tabs.
function Header() {
  return (
    <header className='row pt-3 pb-3'>
      <div className="col-3">
        <h1>Trevor Blanchard</h1>
      </div>
      <div className="col-9">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
