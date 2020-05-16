import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
// import AddToCart from "./components/AddToCart";
import StyleSelector from "./components/StyleSelector";
import { Grid, Box } from "@material-ui/core";
import { setInfo, setSelected } from "../redux/containers/overviewContainer";

const Overview = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: setInfo });
  });

  // const [product_id, setProduct_id] = useState(50);

  // const [product_id, setProduct_id] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selected, setSelected] = useState([]);
  // const [images, setImages] = useState([]);

  // useEffect(() => props.setStyles(50));
  // OverviewContainer.setInfo(50);
  // const [info, setInfo] = useState([]);
  // setInfo(50);
  // console.log("|info|", props);

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

export default Overview;
