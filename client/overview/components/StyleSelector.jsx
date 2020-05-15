import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { Box, Grid } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

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
      <Box>Style > {selected.name}</Box>
      <Grid container spacing={1}>
        {images.map((style, i = 0) => (
          <Grid item>
            <Avatar key={i++} src={style} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StyleSelector;

/* <AvatarGroup max={4} spacing={10}>
  {images.map((style, i = 0) => (
    <Avatar key={i++} src={style} />
  ))}
</AvatarGroup> */

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
