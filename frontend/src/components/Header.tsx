import logo from './logo.png';

function Header() {
  return (
    <header className="row header navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text=white">COOL SHOPPING CART APP TITLE</h1>
      </div>
    </header>
  );
}

export default Header;
