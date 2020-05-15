import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";

// state depends on SKU / selected style
const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://18.224.200.47/products/${50}/styles`)
      .then((result) => {
        const payload = result.data.results.map((style) => style.photos[0].url);
        setImages(payload);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Box>
      <img src={images[0]} width="400px" height="300px" />
    </Box>
  );
};

export default Gallery;
