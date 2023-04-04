import { Link } from "react-router-dom"
import '../Navbar/Navbar.css';

const NavBar = ()=>{
    return (
        <>
        <div className="navBar">
        <nav>
            <Link className="link" to="/">Home</Link>
        </nav>
        </div>
        </>
    )
}
export default NavBar;