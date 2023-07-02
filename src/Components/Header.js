import "../assets/css/main.css";
function Header() {
  return (
    <>
      <header>
        <nav className="nav">
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
