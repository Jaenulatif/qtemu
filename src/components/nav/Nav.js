import "./nav.css";

function Nav(){
    return(
        <div className="nav-container">
            <div className="nav-items">
                <h3>QTemu</h3>
                <a href="#">Create </a>
                <a href="#">Explore</a>
                <a href="#" className="Login">Login</a>
            </div>
        </div>
    );
}

export default Nav;