import React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckout } from "../../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/iconLibrary";

const ProductCard = ({ item }) => {
  const { sku, icon, name, price } = item;
  const { checkout } = useSelector((store) => store.checkout);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      updateCheckout({
        ...checkout,
        [sku]: checkout[sku] ? checkout[sku] + 1 : 1,
      })
    );
  };

  const deleteItem = () => {
    if (!checkout[sku]) return;
    dispatch(
      updateCheckout({
        ...checkout,
        [sku]: checkout[sku] !== 0 ? checkout[sku] - 1 : 0,
      })
    );
  };

  return (
    <Paper elevation={5} className="productCardWrapper">
      <Grid container className="productCard">
        <Grid item>
          <FontAwesomeIcon size="2x" icon={icon} />
        </Grid>
        <Grid item>{name}</Grid>
        <Grid item>{price}€</Grid>
        <Grid container>
          <Grid item xs={6} className="buttonWrapper">
            <Button variant="contained" color="primary" onClick={deleteItem}>
              -
            </Button>
          </Grid>
          <Grid item xs={6} className="buttonWrapper">
            <Button variant="contained" color="primary" onClick={addItem}>
              +
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductCard;
