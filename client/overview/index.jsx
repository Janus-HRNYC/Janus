import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
import StyleSelector from "./components/StyleSelector";
// import AddToCart from "./components/AddToCart";
import { Grid, Box } from "@material-ui/core";

const Overview = (props) => {
  const {
    id = 5,
    info,
    getInfo,
    styles,
    getStyles,
    selected,
    getSelected,
  } = props;

  useEffect(() => {
    getInfo(id);
    getStyles(id);
    getSelected(id);
  }, []);

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Grid xs={2}></Grid>
      <Grid item sm>
        <Gallery id={id} />
      </Grid>
      <Grid item sm>
        <ProductInfo info={info} id={id} />
        <StyleSelector styles={styles} selected={selected} id={id} />
        {/* <Box><AddToCart /></Box> */}
      </Grid>
      <Grid xs={2}></Grid>
    </Grid>
  );
};

export default Overview;
