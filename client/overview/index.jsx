import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./components/Gallery";
import ProductInfo from "./components/ProductInfo";
import StyleSelector from "./components/StyleSelector";
import AddToCart from "./components/AddToCart";
import { Grid } from "@material-ui/core";

const Overview = (props) => {
  const {
    id = 5,
    info,
    getInfo,
    styles,
    getStyles,
    selected_id,
    getSelected,
  } = props;

  const [style_id, setStyle_id] = useState(0);
  useEffect(() => {
    setStyle_id(selected_id);
  }, [selected_id]);

  const [images, setImages] = useState([]);
  useEffect(() => {
    getInfo(id);
    getStyles(id);
    getSelected(id);
    axios
      .get(`http://18.224.200.47/products/${id}/styles`)
      .then((result) => {
        const payload1 = result.data.results.map((style) =>
          style.photos.map((item) => item.url)
        );
        setImages(payload1);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={1}></Grid>
      <Grid item xs>
        <Gallery id={id} style_id={style_id} images={images} />
      </Grid>
      <Grid item xs>
        <ProductInfo info={info} styles={styles} id={id} style_id={style_id} />
        <StyleSelector
          styles={styles}
          style_id={style_id}
          id={id}
          setStyle_id={setStyle_id}
        />
        <AddToCart styles={styles} id={id} style_id={style_id} />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Overview;
