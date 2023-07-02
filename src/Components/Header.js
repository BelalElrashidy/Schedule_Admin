import '../assets/css/main.css';
function Header(){
    return(
        <>
            <header>
                <nav className="nav">
                    <div className="bar">
                        <p>
                            Admin
                        </p>
                        <a>Logout</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;