import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../../ratings_reviews/StarRating";
import { Box, Grid, Avatar } from "@material-ui/core";

const ProductInfo = ({ info, id }) => {
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  useEffect(() => {
    axios
      .get(`http://18.224.200.47/reviews/${id}/list`)
      .then((result) => {
        const payload = result.data.results;
        let sum = 0;
        for (const rating of payload) {
          sum += rating.rating;
        }
        const avg = sum / payload.length;
        setRating(avg);
        setRatingCount(payload.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box>
      <Grid container direction="row" spacing={1}>
        <Grid item>
          <StarRating star={rating} />
        </Grid>
        <Grid item>{`Read all ${ratingCount} reviews`}</Grid>
      </Grid>
      {info.category}
      {/* <Box></Box> */}
      {/* <Box> */}
      <h2>{info.name}</h2>
      {/* </Box> */}
      {info.default_price}
      {/* <Box></Box> */}
      <div width="50%">{info.description}</div>
      <Grid container direction="row" spacing={1}>
        <Avatar
          style={{
            backgroundColor: "blue",
            margin: "10px",
            width: "60px",
            height: "60px",
          }}
        >
          tweet
        </Avatar>
        <Avatar
          style={{
            backgroundColor: "blue",
            margin: "10px",
            width: "60px",
            height: "60px",
          }}
        >
          fb
        </Avatar>
        <Avatar
          style={{
            backgroundColor: "red",
            margin: "10px",
            width: "60px",
            height: "60px",
          }}
        >
          pintrest
        </Avatar>
      </Grid>{" "}
    </Box>
  );
};

export default ProductInfo;

//STAR RATING (# reviews)
// 5 stars should appear
// rating should appear via filled in stars and number like so: "3 1/2"
// link to reviews section
//PRODUCT CATEGORY
//PRODUCT TITLE
//PRICE
// defined by style selected
// if item on sale, price is color red and original price crossed out
// renders dynamically w/style selected
// if none selected, price remains the default option
//PRODUCT OVERVIEW
// display this free form text field if it exists for item
//SOCIAL MEDIA
// adds buttons for social media for sharing
