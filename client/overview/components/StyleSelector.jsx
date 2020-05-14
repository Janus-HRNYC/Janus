import React, { useState, useEffect } from "react";
import axios from "axios";

const StyleSelector = () => {
  const [product_id, setProduct_id] = useState(50);
  const [styles, setStyles] = useState([]);
  const [selected, setSelected] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://18.224.200.47/products/${product_id}/styles`)
      .then((result) => {
        setStyles(result.data.results);
        setSelected(result.data.results[0]);
        setThumbnails(result.data.results[0].photos);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>
        <div>{selected.name}</div>
        <div>
          {thumbnails.map((thumbnail, i = 0) => (
            <img src={thumbnail.thumbnail_url} key={i++} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;
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
