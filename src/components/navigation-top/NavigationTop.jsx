import Logo from "../../assets/logo.jpg"
import './navigation-top.css'
import {Link} from "react-router-dom"


export default function NavigationTop() {

    return (
        <Link to="/" className='nav-top'>
            <img
            className="nav-img" 
            src={Logo} 
            alt="" />
        </Link>

    )
}