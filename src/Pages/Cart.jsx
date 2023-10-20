import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../redux/cartSlice';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  
  return (
    <div style={{marginTop:'100px'}}>
        {
          cartArray?.length>0?
          <table className='container mt-5 table border rounded shadow p-5'>
            <thead>
              <tr className='text-center'>
                <th> # </th>
                <th> Product Name </th>
                <th> Image </th>
                <th> Price </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {
                cartArray.map((item,index)=>(
                  <tr key={index} className='text-center'>
                    <td className='p-5'> {index+1} </td>
                    <td className='p-5'> {item.title} </td>
                    <td> <img width={'100px'} height={'100px'} src={item.thumbnail} alt="" /> </td>
                    <td className='p-5'> $ {item.price} </td>
                    <td className='p-5'> 
                      <button onClick={()=>dispatch(deleteCart(item.id))} className='btn'> <i class="fa-solid fa-trash text-danger"> </i></button> 
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          : <p className='fs-3 text-danger m-5'> Cart is Empty!! </p>
        }
    </div>
  )
}

export default Cart