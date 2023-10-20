import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  const dispatch = useDispatch()
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='mb-5 ms-5'>
        {
          data?.length>0?data.map((item,index) => (
            <Col key={index} className='mt-5 mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem',height:'32rem' }}>
                <Card.Img variant="top" src={item?.thumbnail} style={{height:'250px'}} />
                <Card.Body>
                  <Card.Title> {item?.title.slice(0,20)}... </Card.Title>
                  <Card.Text>
                    <p>{item?.description.slice(0,50)}...</p>
                    <p className='fw-bolder text-dark'> $ {item?.price} </p>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn btn-light' style={{ border: 'none' }} onClick={()=>dispatch(addToWishlist(item))}><i class="fa-solid fa-heart text-danger fa-2x"></i></Button>
                    <Button className='btn btn-light' style={{ border: 'none' }} onClick={()=>dispatch(addToCart(item))}><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p className='fs-3 text-danger'> Products not available!!! </p>
        }
      </Row>
    </div>
  )
}

export default Home