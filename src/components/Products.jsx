import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Grid } from "./Styled";
import { Select } from "./Styled";

export const Products = () => {
  const {isLoading, isError, products}=useSelector((state)=>state.products)
  const dispatch=useDispatch()
  console.log(products)

 
  

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    dispatch(getProductsData())
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change


  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>


      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */
          products.map((value)=>{
            return (
              <div key={value.id}>
                <h3>{value.title}</h3>
                <img src={value.image} alt="" />
                <h3>{value.brand}</h3>
                <p>Price:{value.price}</p>
              </div>
            )
          })
        }
      </Grid>
    </>
  );
};
