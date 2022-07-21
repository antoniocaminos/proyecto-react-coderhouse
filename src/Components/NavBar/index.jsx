import React from 'react'
import { CartWidget } from '../CartWidget'
import { Title } from '../Title'
export const NavBar = () => {
  return (
    <div className='container'>
    <nav className='nav'>
        <div className='logo'>
            <a href="nav-link">BigBurger</a>
        </div>
        <ul className="nav-list">
            <li className='cat1' href='#'>Hamburgesas</li>
            <li className='cat2'href='#'>Papas</li>
            <li className='cat3'href='#'>Bebidas</li>
            <li className='cat4'href='#'>Helados</li>
            <li className='cat5'href='#'><CartWidget /></li>
        </ul>
    </nav>
    <Title/>
    </div>

  )
}
