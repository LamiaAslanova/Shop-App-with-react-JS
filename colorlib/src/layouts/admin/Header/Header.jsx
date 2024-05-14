import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header__bottom">
        <div className="header__bottom__left">
          <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="logo" />
        </div>
        <div className="header__bottom__right">
          <ul>
            <li>
              <Link to='/admin'>Dashboard</Link>
            </li>
            <li>
              <Link to='/admin/add'>Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header