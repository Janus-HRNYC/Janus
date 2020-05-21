import React, { useState, useEffect } from "react";
import { makeStyles, Fab } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

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
    setIndex(index + 1);
  };

  const leftClick = () => {
    setIndex(index - 1);
  };

  return (
    <div
      style={{
        display: "block",
        position: "relative",
        zIndex: 2,
      }}
    >
      <img
        src={images[index]}
        style={{
          objectFit: "cover",
          position: "relative",
          width: "750px",
          height: "600px",
          zIndex: 10,
        }}
      />
      {index === 0 ? null : (
        <Fab
          onClick={leftClick}
          style={{
            // borderRadius: "300px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 5,
            zIndex: 12,
            opacity: "33%",
          }}
        >
          <ArrowBack style={{ color: "primary", fontSize: "32px" }} />
        </Fab>
      )}
      {index === images.length - 1 ? null : (
        <Fab
          onClick={rightClick}
          style={{
            // borderRadius: "50%",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: 5,
            zIndex: 12,
            opacity: "33%",
          }}
        >
          <ArrowForward style={{ fontSize: "32px" }} />
        </Fab>
      )}
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
