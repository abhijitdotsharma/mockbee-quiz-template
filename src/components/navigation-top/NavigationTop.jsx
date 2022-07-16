import Logo from "../../assets/logo.jpg"
import './navigation-top.css'



export default function NavigationTop() {

    return (
        <div className='nav-top'>
            <img
            className="nav-img" 
            src={Logo} 
            alt="" />
        </div>

    )
}