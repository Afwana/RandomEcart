import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        deleteCart:(state,action)=>{
            return state.filter(product=>product.id!=action.payload)
        }
    }
})

export const {addToCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer