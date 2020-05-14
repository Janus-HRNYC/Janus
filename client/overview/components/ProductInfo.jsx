import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductInfo = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://18.224.200.47/products/list`)
      .then((result) => {
        setProduct(result.data[0]);
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* <div>{stars}</div> */}
      <div>{product.category}</div>
      <div>{product.name}</div>
      <div>{product.name}</div>
      <div>{product.default_price}</div>
      <div>{product.description}</div>
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
// async () => {
//   try {
//     const result = await axios.get(`http://18.224.200.47/cart/${id}`);
//     setCart(result.data);
//   } catch (err) {
//     console.error(err);
//   }
// };
