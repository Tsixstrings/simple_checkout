import React from "react";
import { Grid } from "@material-ui/core";
import { Header, Footer } from "./components";

const Layout = ({ children }) => {
  return (
    <Grid container className="layoutWrapper">
      <Header appTitle="Simple Checkout" />
      <Grid container className="bodyBox">{children}</Grid>
      <Footer copy="© Antonio Martinez Martin 2021" />
    </Grid>
  );
};

export default Layout;
