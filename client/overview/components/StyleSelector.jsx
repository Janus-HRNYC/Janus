import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Badge, Avatar, makeStyles } from "@material-ui/core";

const StyleSelector = () => {
  const [product_id, setProduct_id] = useState(50);
  const [styles, setStyles] = useState([]);
  const [selected, setSelected] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://18.224.200.47/products/${product_id}/styles`)
      .then((result) => {
        setStyles(result.data.results);
        setSelected(result.data.results[0]);
        const payload = result.data.results.map(
          (style) => style.photos[0].thumbnail_url
        );
        console.log(payload);
        setImages(payload);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box>
      <Box>
        <h2>Style > {selected.name}</h2>
      </Box>
      <Grid container spacing={1}>
        {images.map((style, i = 0) => (
          <Grid item key={i++}>
            <Avatar
              src={style}
              style={{ margin: "10px", width: "80px", height: "80px" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StyleSelector;

// all styles should display as thumbnails
// toggle/click between styles
// thumbnails in rows of 4
// selected style should have check mark overlayed over thumbnail
// selected style name should appear above style choices
// click on style to select style
// clicking current selection has no impact
// default style is first in list
// all products at least 1 style
// there is a selected style at all times
