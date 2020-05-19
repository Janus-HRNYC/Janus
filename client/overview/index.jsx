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

  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

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
        const payload2 = result.data.results.map((style) =>
          style.photos.map((item) => item.thumbnail_url)
        );
        setImages(payload1);
        setThumbnails(payload2);
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
        <Gallery id={id} selected_id={selected_id} images={images} />
      </Grid>
      <Grid item xs>
        <ProductInfo
          info={info}
          styles={styles}
          id={id}
          selected_id={selected_id}
        />
        <StyleSelector
          styles={styles}
          selected_id={selected_id}
          id={id}
          getSelected={getSelected}
          thumbnails={thumbnails}
        />
        <AddToCart />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Overview;
