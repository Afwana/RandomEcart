import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center' style={{ width: '100%', height: '300 px' }}>
        <div className="footer d-flex justify-content-evenly w-100 mt-3">
          <div className="website" style={{ width: '400px' }}>
            <h3>
              <i className='fa-solid fa-cart-shopping' style={{ color: '#000000' }}> </i>{'  '}
              E-Cart
            </h3>
            <h6> Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
            <h6>Code licensed MIT, docs CC BY 3.0.</h6>
            <p> Currently v5.3.2.</p>
          </div>
          <div className="links d-flex flex-column">
            <h3> Links </h3>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}> Home
            </Link>
            <Link to={'/cart'} style={{ textDecoration: 'none', color: 'black' }}> Cart
            </Link>
            <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'black' }}>  WishList
            </Link>
          </div>
          <div className="guides d-flex flex-column">
            <h3> Guides </h3>
            <Link to={'https://react.dev'} style={{ textDecoration: 'none', color: 'black' }}> React
            </Link>
            <Link to={'https://react-bootstrap-github.io/'} style={{ textDecoration: 'none', color: 'black' }}> React Bootstrap
            </Link>
            <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{ textDecoration: 'none', color: 'black' }}> Routing
            </Link>
          </div>
          <div className="contact">
            <h3> Contact Us </h3>
            <div className="sub d-flex mt-3">
              <input type="text" className='form-control' placeholder='Enter your Email Id' />
              <button className='btn btn-primary ms-2'> <i className='fa-solid fa-arrow-right fa-beat'></i></button>
            </div>
            <div className="icons fs-4 d-flex justify-content-between mt-3">
              <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'black' }}> <i className='fa-solid fa-envelope'></i> </Link>
              <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-brands fa-twitter"></i> </Link>
              <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'black' }}> <i className='fa-brands fa-linkedin'></i> </Link>
              <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'black' }}> <i className='fa-brands fa-instagram'></i> </Link>
              <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'black' }}> <i className='fa-brands fa-github'></i> </Link>
              <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'black' }}> <i className='fa-brands fa-facebook'></i> </Link>
            </div>
          </div>
        </div>
        <p> Copyright &copy; 2023 E-Cart. Built with React. </p>
      </div>
    </>
  )
}

export default Footer