import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
import StyleSelector from "./components/StyleSelector";
import AddToCart from "./components/AddToCart";
import SocialMedia from "./components/SocialMedia";
import { Grid } from "@material-ui/core";

// useStyle
// makeStyle

const Overview = (props) => {
  const {
    id,
    info,
    styles,
    getInfo,
    getStyles,
    selected_id,
    getSelected,
  } = props;
  useEffect(() => {
    getInfo(id);
    getStyles(id);
    getSelected(id);
  }, []);

  const [style_id, setStyle_id] = useState(0);
  useEffect(() => {
    setStyle_id(selected_id);
  }, [selected_id]);

  const [index, setIndex] = useState(0);

  return (
    <Grid
      container
      direction="row"
      spacing={3}
      justify="center"
      alignItems="center"
    >
      <Grid item xs>
        <Gallery
          id={id}
          index={index}
          setIndex={setIndex}
          style_id={style_id}
          styles={styles}
        />
      </Grid>
      <Grid
        item
        xs
        style={{
          marginTop: "150px",
          paddingRight: "50px",
        }}
      >
        <ProductInfo info={info} styles={styles} id={id} style_id={style_id} />
        <StyleSelector
          styles={styles}
          style_id={style_id}
          id={id}
          setStyle_id={setStyle_id}
          index={index}
          setIndex={setIndex}
        />
        <AddToCart styles={styles} style_id={style_id} info={info} />
        <SocialMedia />
      </Grid>
    </Grid>
  );
};

export default Overview;
