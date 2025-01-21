import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buildCreateApi } from "@reduxjs/toolkit/query";
import axios from "axios";

export const getProductsBasketThunk = createAsyncThunk("basket/products", async () => {
    const response = await axios.get("http://localhost:5500/basket")
    return response.data
})

export const deleteProductsFromBasketThunk = createAsyncThunk("basket/deleteItem", async(id) => {
    const response = await axios.delete(`http://localhost:5500/basket/${id}`)
    return id
})

export const basketSlice = createSlice({
    name:"basket",
    initialState:{
        basket:[]
    },
    reducer:[],
    extraReducers:builder => 
        builder
    //get products basket
    .addCase(getProductsBasketThunk.fulfilled, (state, action) => {
        state.loading = false
        state.basket = action.payload
    })
    .addCase(getProductsBasketThunk.pending, (state, action) => {
        state.loading = true
    })
    .addCase(getProductsBasketThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })


    // delete from basket
    .addCase(deleteProductsFromBasketThunk.fulfilled, (state, action) => {
        state.loading = false
        state.basket = state.basket.filter(item => item._id !== action.payload)
    })
    .addCase(deleteProductsFromBasketThunk.pending, (state, action) => {
        state.loading = true
    })
    .addCase(deleteProductsFromBasketThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
})

export default basketSlice.reducer