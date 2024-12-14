import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iCart {
    countAllProducts: number;
    priceAllProducts: number;
    result: number;
}

const initialState = {
    countAllProducts: 0,
    priceAllProducts: 0,
    result: 0,
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCount(state, action: PayloadAction<{ count: number}>) {
            action.payload.count += 1
        },
        reduceCount(state, action: PayloadAction<{ count: number}>) {
           if(action.payload.count > 1) {
            action.payload.count -= 1
           }
        }
    }
})

export const { addCount, reduceCount } = cartSlice.actions
export default cartSlice.reducer