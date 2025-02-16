import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/more/logo1.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-[#6F4E37] text-white shadow-sm px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#6F4E37] text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        <NavLink to={'/addCoffee'}><li><a>Add New Coffee</a></li></NavLink>
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
        
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl"><img className='w-11' src={logo} alt="" />Espresso Emporium</a>
  </div>
  <div className="navbar-end">
    <Link to={'/login'}><button className='btn btn-outline rounded-2xl'>Sign in</button></Link>
  </div>
</div>
    );
};

export default Navbar;