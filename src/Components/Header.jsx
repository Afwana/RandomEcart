import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
    <Navbar expand="lg" className="bg-primary position-fixed w-100 top-0" style={{zIndex:'1'}}>
      <Container className='d-flex justify-content-between'>
        <div>
          <Link to="/" style={{color:'#ffffff',textDecoration:'none'}} className='btn d-flex align-items-center'>
            <h3 className='text-light'>
              <i className='fa-solid fa-cart-shopping me-2' style={{ color: '#ffffff' }}> </i>{'  '}
                  E-Cart
            </h3>
          </Link>
        </div>
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/wishlist" className='btn d-flex align-items-center me-3'>
                 <i className="fa-solid fa-heart text-light fa-2x"></i>
                 <span className='text-light fs-3 ms-1'> <sup> {wishlist?.length} </sup> </span>
              </Link>
              <Link to="/cart" className='btn d-flex align-items-center'>
                 <i className="fa-solid fa-cart-plus text-light fa-2x"></i> 
                 <span className='text-light fs-3 ms-1'> <sup> {cart?.length} </sup> </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </>
  )
}

export default Header