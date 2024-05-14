import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header__top">
        <div className="header__top__left">
          <div className="header__top__left__phone">
            <p>+12312-3-1209</p>
          </div>
          <div className="header__top__left__mail">
            <p>SUPPORT@COLORLIB.COM</p>
          </div>
        </div>
        <div className="header__top__right">
          <button>LOGIN</button>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__left">
          <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="logo" />
        </div>
        <div className="header__bottom__right">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header