import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductInfo = () => {
  const [product_id, setProduct_id] = useState(50);

  const [info, setInfo] = useState({});
  useEffect(() => {
    axios
      .get(`http://18.224.200.47/products/${product_id}`)
      .then((result) => setInfo(result.data))
      .catch((err) => console.error(err));
  }, []);

  const [rating, setRating] = useState(0);
  useEffect(() => {
    axios
      .get(`http://18.224.200.47/reviews/${product_id}/list`)
      .then((result) => {
        const payload = result.data.results;
        let sum = 0;
        for (let i = 0; i < payload.length; i++) {
          sum += payload[i].rating;
        }
        const temp = sum / payload.length;
        setRating(temp);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <div>{rating} read all reviews</div>
      <div>{info.category}</div>
      <div>{info.name}</div>
      <div>{info.default_price}</div>
      <div>{info.description}</div>
      <div>
        {/* social media buttons */}
        <button>Twitter</button>
        <button>Facebook</button>
        <button>Pintrest</button>
      </div>
    </div>
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
