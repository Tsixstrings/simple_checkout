import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import ProductCard from "./components/ProductCard";
import "./ProductsBox.scss";

const ProductBox = () => {
  const { catalog } = useSelector((store) => store.catalog);
  return (
    <Grid container className="productsBox">
      {catalog && Object.values(catalog).map((row) => {
        return (
          <Grid item xs={6} sm={4} className="centerItems">
            <ProductCard item={row} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductBox;
