import { configureStore } from "@reduxjs/toolkit";
import studentReducer from '../slices/studentSlice'
const Store= configureStore({
    reducer:{
        student: studentReducer,
        
    }
}) 

export default Store;