import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsHomeThunk = createAsyncThunk("home/products", async() => {
    const response = await axios.get("http://localhost:5500/products/")
    return response.data
})

export const postProductsBasketThunk = createAsyncThunk("home/products/sendBasket", async (data) => {
    axios.get("http://localhost:5500/basket")
    .then((res) => {
        const currentProduct = res.data.find(item => item.title === data.title)
        if (currentProduct) {
            alert("mehsul artiq basketde var")
        } else {
            axios.post("http://localhost:5500/basket", data)
            return data
        }
    })
})

export const deleteProductWithAdminThunk = createAsyncThunk("admin/deleteItem", async (id) => {
    const response = await axios.delete(`http://localhost:5500/basket/${id}`)
    return id
})

export const addProductWithAdminThunk = createAsyncThunk("admin/addItem", async (data) => {
    const response = await axios.post("http://localhost:5500/products/", data)
    return data
}) 

export const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },
    reducer:[],
    extraReducers:builder => 
        builder
    
    //get home
    .addCase(getProductsHomeThunk.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
    })
    .addCase(getProductsHomeThunk.pending, (state, action) => {
            state.loading = true
    })
    .addCase(getProductsHomeThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })

    // post basket
    .addCase(postProductsBasketThunk.fulfilled, (state, action) => {
        state.loading = false
    })
    .addCase(postProductsBasketThunk.pending, (state, action) => {
        state.loading = true
    })
    .addCase(postProductsBasketThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })

    //delete with admin panel
    .addCase(deleteProductWithAdminThunk.fulfilled, (state, action) => {
        state.loading = false
        state.products = state.products.filter(item => item._id !== action.payload)
    })
    .addCase(deleteProductWithAdminThunk.pending, (state, action) => {
        state.loading = true
    })
    .addCase(deleteProductWithAdminThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })

    // add products with adminpanel
    .addCase(addProductWithAdminThunk.fulfilled, (state, action) => {
        state.loading = false
    })
    .addCase(addProductWithAdminThunk.pending, (state, action) => {
        state.loading = true
    })
    .addCase(addProductWithAdminThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
})

export default productSlice.reducer