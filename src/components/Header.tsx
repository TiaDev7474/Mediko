import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMoon , faBell } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <ul className='nav'>
             <li className='nav-item'>
                 <NavLink  to='/' className='link'>
                     <FontAwesomeIcon icon={faHouse} size='1x'/>
                     Home
                 </NavLink>
             </li>
             <li className='nav-item'>
                   <NavLink to='notification' className='link'>
                       <FontAwesomeIcon icon={faBell}  size='1x'/>
                        Notification
                  </NavLink>
             </li>
        </ul>
         <div className='header-end'>
              <span className='icon-moon'>
                  <a className='link'>
                      <FontAwesomeIcon  icon={faMoon}  size='xl' />
                  </a>
              </span>
              <span>
                   
              </span>
         </div>
    </div>
  )
}

export default Header