import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'

const Header = props => {
  const { branding } = props
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-3'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          {branding}
        </Link>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact/add'>
              Add <FontAwesomeIcon icon={faPlus} />
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About <FontAwesomeIcon icon={faQuestion} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
