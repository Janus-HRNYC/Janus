import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
// import AddToCart from "./components/AddToCart";
import StyleSelector from "./components/StyleSelector";
import { Grid, Box } from "@material-ui/core";
// import OverviewContainer from "../redux/containers/overviewContainer";

const Overview = (props) => {
  const {
    id = 27,
    info,
    getInfo,
    styles,
    getStyles,
    selected,
    getSelected,
  } = props;

  useEffect(() => {
    const id = 27;
    getInfo(id);
    getStyles(id);
    getSelected(id);
  }, []);

  return (
    <Grid
      container
      direction="row"
      spacing={3}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Gallery id={id} />
      </Grid>
      <Grid item>
        <Box>
          <ProductInfo info={info} id={id} />
        </Box>
        <Box>
          <StyleSelector styles={styles} selected={selected} />
        </Box>
        {/* <Box><AddToCart /></Box> */}
      </Grid>
    </Grid>
  );
};

export default Overview;
