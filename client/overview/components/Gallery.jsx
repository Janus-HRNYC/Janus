import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";

const Gallery = ({ id, style_id, styles }) => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    (() => {
      for (let i = 0; i < styles.length; i++) {
        if (styles[i].style_id === style_id) {
          setSelectedImage(styles[i].photos[0]["url"]);
          setImages(styles[i].photos[0]["url"]);
          return;
        }
      }
    })();
  }, [style_id]);

  return (
    <div>
      <img src={selectedImage} width="600px" height="600px" />
    </div>
  );
};

export default Gallery;

// state depends on SKU / selected style
// () =>
//   axios
//     .get(`http://18.224.200.47/products/${id}/styles`)
//     .then((result) => {
//       const payload1 = result.data.results.map((style) =>
//         style.photos.map((item) => item.url)
//       );
//       setImages(payload1);
//     })
//     .catch((err) => console.error(err)),
