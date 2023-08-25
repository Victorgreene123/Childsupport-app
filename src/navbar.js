import logo from './logo.svg';
import './App';
import './index.css'
import { Link } from 'react-router-dom';
function Navbar(){
    return(
      <nav className="navbar">
      <h4>Childware</h4>
      <ul className="navitems">
          <li><Link to="/login">Sign In</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/report">Report </Link></li>
          <li><Link to="/emergency">Emergency</Link></li>
          <li><Link to="/contact">Contact us </Link></li>
      </ul>
      </nav>

    )
}
export default Navbar;