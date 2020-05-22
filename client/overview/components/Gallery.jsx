import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Fab,
  Grid,
  GridList,
  GridListTile,
} from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const Gallery = ({ id, style_id, styles, index, setIndex }) => {
  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    let photos = [];
    let thumbs = [];
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === style_id) {
        const payload = styles[i].photos;
        for (let j = 0; j < payload.length; j++) {
          photos.push(payload[j]["url"]);
          thumbs.push(payload[j]["thumbnail_url"]);
        }
      }
    }
    setImages(photos);
    setThumbnails(thumbs);
    setImg(photos[index]);
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
        // onClick={expand}
        style={{
          objectFit: "cover",
          position: "relative",
          width: "750px",
          height: "700px",
          zIndex: 10,
        }}
      />
      <GridList
        cols={1}
        cellHeight={70}
        spacing={8}
        style={{
          width: "70px",
          maxHeight: "600px",
          position: "absolute",
          top: "25%",
          transform: "translateY(-25%)",
          left: 15,
          zIndex: 12,
        }}
      >
        {thumbnails.map((thumb, i = 0) => {
          while (i < 7) {
            return (
              <GridListTile key={i++}>
                <img src={thumb} onClick={(e) => setIndex(i - 1)} style={{}} />
              </GridListTile>
            );
          }
        })}
      </GridList>
      {index === 0 ? null : (
        <Fab
          onClick={leftClick}
          style={{
            // borderRadius: "300px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: 100,
            zIndex: 12,
            opacity: "45%",
          }}
        >
          <ArrowBack style={{ color: "primary", fontSize: "32px" }} />
        </Fab>
      )}
      {index === images.length - 1 ? null : (
        <Fab
          onClick={rightClick}
          style={{
            // borderRadius: "100%",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: 10,
            zIndex: 12,
            opacity: "45%",
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

// const [image, setImage] = useState([]);
// const [thumbnail, setThumbnail] = useState([]);
// setImage(images[index]);
// setThumbnail(thumbnails[index]);
// const [currentImage, setCurrentImage] = useState(images[index]);
// const [thumbWasClicked, setThumbWasClicked] = useState(false);
// useEffect(() => {
//   thumbWasClicked ? setCurrentImage(thumbnails[index]) : null;
//   setThumbWasClicked(false);
// }, [thumbWasClicked]);
// const thumbClick = () => {
//   setThumbWasClicked(true);
// };
