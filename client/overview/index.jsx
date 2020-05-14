import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
// import AddToCart from "./components/AddToCart";
import StyleSelector from "./components/StyleSelector";
import { Grid, Box } from "@material-ui/core";

const mapStateToProps = (store) => ({});

const Overview = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item>
          <Gallery />
        </Grid>
        <Grid item>
          <ProductInfo />
          <StyleSelector />
          {/* <AddToCart /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps)(Overview);
