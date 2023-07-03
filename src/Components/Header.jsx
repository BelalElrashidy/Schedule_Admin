import "../assets/css/main.css";
const logo = require("../assets/img/new_logo.png");
function Header() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="bar">
            <p>Admin</p>
            <button className="log"> logout </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
