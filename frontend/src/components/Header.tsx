import logo from './logo.png';

function Header() {
  return (
    <header className="navbar navbar-dark bg-dark">
      <nav className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Cool Shopping Cart App Logo"
            className="logo d-inline-block align-top"
          />
          <h1 className="text-white ms-3 mb-0">Cool Shopping Cart App Title</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
