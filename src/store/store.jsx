import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './modules/cartSlice'

const store = configureStore({
    // 注册子模块
    reducer:{
        cart:cartReducer
    }
})
export default store