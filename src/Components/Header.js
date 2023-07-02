import "../assets/css/main.css";
const logo = require("../assets/img/img.xml");
function Header() {
  return (
    <>
      <header>
        <nav className="nav">
            <img src={logo} alt="logo" />
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
