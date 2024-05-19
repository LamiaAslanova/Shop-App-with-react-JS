import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
            <div className="col-3">
              <h4>Newsletter</h4>
              <form action="#">
                <label htmlFor="email">Stay update with our latest</label>
                <input type="text" name="email" id="email" placeholder='Enter Email' />
                <button><i class="fa-solid fa-arrow-right-long"></i></button>
              </form>
            </div>
            <div className="col-3">
              <h4>Instagram Feed</h4>
              <ul className='mini__images'>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
                <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" /></li>
              </ul>
            </div>
            <div className="col-3">
              <h4>Follow Us</h4>
              <p>Let us be social</p>
              <ul className='mini__icons'>
                <li>
                  <i class="fa-brands fa-facebook-f"></i>

                </li>
                <li>
                  <i class="fa-brands fa-twitter"></i>

                </li>
                <li>

                  <i class="fa-brands fa-dribbble"></i>
                </li>
                <li>
                  <i class="fa-brands fa-behance"></i>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-regular fa-heart"></i> by Colorlib</p>
      </div>
    </footer>
  )
}

export default Footer