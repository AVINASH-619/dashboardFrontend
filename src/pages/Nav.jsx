import { Link } from 'react-router-dom';
import './Navbar.css';
//import Dropdown from './Dropdown';

function Nav() {

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' >
          NCR
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links' >
              Home
            </Link>
          </li>
    
          <li className='nav-item'>
            <Link
              to='/commands'
              className='nav-links'>
              Command
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;