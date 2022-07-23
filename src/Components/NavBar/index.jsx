import React from 'react'
import { CartWidget } from '../CartWidget'
//import { Title } from '../Title'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='container'>
    <nav className='nav'>
        <div className='logo'>
            <Link to='/' className="nav-link">BigBurger</Link>
        </div>
        <ul className="nav-list">
            <li><Link to='/category/burger' className='cat1'>Hamburgesas</Link></li>
            <li><Link to='/category/fries' className='cat2'>Papas</Link></li>
            <li><Link to='/category/drink' className='cat3'>Bebidas</Link></li>
            <li><Link to='/category/dessert' className='cat4'>Helados</Link></li>
            <li><Link to='/Cart' className='cat5'><CartWidget /></Link></li>
        </ul>
    </nav>
    
    </div>

  )
}
export default NavBar
