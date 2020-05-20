import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../../ratings_reviews/StarRating";
import { Box, Grid } from "@material-ui/core";

const ProductInfo = ({ info, id, styles, style_id }) => {
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  useEffect(() => {
    axios
      .get(`http://18.224.200.47/reviews/${id}/list`)
      .then((result) => {
        const payload = result.data.results;
        let sum = 0;
        for (const review of payload) {
          sum += review.rating;
        }
        const avg = sum / payload.length;
        setRating(avg);
        setRatingCount(payload.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box>
      <Grid
        container
        direction="row"
        spacing={1}
        alignItems="baseline"
        alignContent="center"
      >
        <Grid item>
          <StarRating star={rating} />
        </Grid>
        <Grid item>{`Read all ${ratingCount} reviews`}</Grid>
      </Grid>
      <div>{info.category}</div>
      <h2>{info.name}</h2>
      {/* <br /> */}
      <div>
        {(() => {
          for (let i = 0; i < styles.length; i++) {
            if (styles[i].style_id === style_id && styles[i].sale_price > 0) {
              return (
                <div>
                  <Box color="red">{`$ ${styles[i].sale_price}`}</Box>
                  <Box
                    style={{
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                    }}
                  >
                    {`$ ${styles[i].original_price}`}
                  </Box>
                </div>
              );
            }
            return (
              <div>
                <Box> {`$ ${styles[i].original_price}`}</Box>
              </div>
            );
          }
        })()}
      </div>
      <br />
      <div width="50%">{info.description}</div>
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

/* {styles.map((style, i = 0) =>
  style.style_id === style_id && style.sale_price ? (
    <div key={i++}>
      <Box color="red">{style.sale_price}</Box>
      <Box
        style={{
          textDecorationLine: "line-through",
          textDecorationStyle: "solid",
        }}
      >
        {style.original_price}
      </Box>
    </div>
  ) : null
)} */
