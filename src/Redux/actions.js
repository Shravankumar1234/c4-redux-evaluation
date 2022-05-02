// use axios for api call
import axios from "axios";
import { FAILURE,SUCCESS,REQUEST } from "./actionTypes";

export const ProductsDataSuccess=(payload)=>({
    type:SUCCESS,
    payload
})

export const ProductsDataRequest=()=>({
    type:REQUEST,
    
})

export const ProductsDataFail=()=>({
    type:FAILURE,
    
})

const getProductsData=()=>(dispatch)=>{
    dispatch(ProductsDataRequest())
    fetch(`https://movie-fake-server.herokuapp.com/products`)
    .then((res)=>res.json())
    .then((res)=>dispatch(ProductsDataSuccess(res)))
    .catch(()=>dispatch(ProductsDataFail()))
}


const sortProducts = () => ()=>{

};

const filterProducts = () => ()=>{
    
};

export { getProductsData, sortProducts, filterProducts };
