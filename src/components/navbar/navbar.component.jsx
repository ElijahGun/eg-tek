import './navbar.styles.scss';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='nav-container'>
    <nav className='nav-bar'>
      <a className='logo nav-link' href='#'>EG-TEK</a>
      <ul className='nav-bar__links'>
      <Link className='nav-link' to={'/'}><li className='nav-bar__links--home'>Home</li></Link>
        <Link className='nav-link' to={'shop'}> <li className='nav-bar__links--shop'>Shop</li></Link>
        <Link className='nav-link' to={'sign-in'}><li className='nav-bar__links--sign-in'>Sign-in</li></Link>
        <Link className='nav-link' to={'cart'}><li className='nav-bar__links--cart'>Cart</li></Link>
        
      </ul>
    </nav>
  </header>
  )
}
