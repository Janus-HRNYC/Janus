import React, { useState, useEffect } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";

const Gallery = ({ id, style_id, styles, index, setIndex }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    let result = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === style_id) {
        const payload = styles[i].photos;
        for (let j = 0; j < payload.length; j++) {
          result.push(payload[j]["url"]);
        }
      }
    }
    setImages(result);
  }, [style_id]);

  const rightClick = () => {
    if (index + 1 === images.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const leftClick = () => {
    if (index - 1 === -1) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <img
        src={images[index]}
        style={{
          objectFit: "cover",
          position: "relative",
          width: "750px",
          height: "650px",
        }}
      />
      <Button
        onClick={() => leftClick()}
        style={{
          borderRadius: "300px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: 0,
        }}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        onClick={() => rightClick()}
        style={{
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
        }}
      >
        <KeyboardArrowRight />
      </Button>
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
