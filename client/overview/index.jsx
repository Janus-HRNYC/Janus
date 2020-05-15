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
    <Grid
      container
      direction="row"
      spacing={3}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Gallery />
      </Grid>
      <Grid item>
        <Box>
          <ProductInfo />
        </Box>
        <Box>
          <StyleSelector />
        </Box>
        {/* <Box><AddToCart /></Box> */}
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(Overview);
