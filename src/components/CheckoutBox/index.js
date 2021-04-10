import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper, Grid, Button, Chip } from "@material-ui/core";
import { getCheckoutData } from "../../utils/utils";
import { resetCheckout } from "../../store/actions";
import "./CheckoutBox.scss";

const CheckoutBox = () => {
  const dispatch = useDispatch();
  const [checkoutData, setCheckoutData] = useState([]);
  const { checkout } = useSelector((store) => store.checkout);
  const { catalog } = useSelector((store) => store.catalog);

  

  useEffect(() => {
    const aux = getCheckoutData(checkout, catalog);
    setCheckoutData(aux);
  }, [checkout]);

  return (
    <Paper elevation={5} className="checkoutWrapper">
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => dispatch(resetCheckout())}
      >
        Empty cart
      </Button>
      <Grid container>
        <Grid className="title" item xs={12}>
          Your Cart
        </Grid>
        <Grid item xs={12} sm={8} className="box">
          <Grid container className="checkoutLinesBox">
            {checkoutData.checkoutLines?.map((row) => {
              const { qty, name, total, unitPrice, promo, promoApplied } = row;
              if (qty > 0) {
                return (
                  <Grid item xs={12}>
                    <Paper elevation={5} className="checkoutLineCard">
                      <Grid item xs={12}>
                        <b>
                          {name} (x{qty})
                        </b>{" "}
                        - {total}€{" "}
                        <span className="smallText">
                          ({parseFloat(unitPrice).toFixed(2)}
                          €/each)
                        </span>
                      </Grid>
                      {promoApplied && (
                        <div>
                          <Chip
                            className="promoChip"
                            size="small"
                            label={`Applied "${promo}" promo!!!`}
                          />
                        </div>
                      )}
                    </Paper>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} className="box ">
          <Grid container className="totalBox">
            <Grid item xs={12} className="largeText">
              Total
            </Grid>

            <Grid item xs={12} className="xLargeText textRight">
              {checkoutData.total}€
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CheckoutBox;
