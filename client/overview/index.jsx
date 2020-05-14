import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProductInfo from "./components/ProductInfo";
// import AddToCart from "./components/AddToCart";
import StyleSelector from "./components/StyleSelector";

const mapStateToProps = (store) => ({});

const Overview = () => {
  return (
    <div>
      <div>
        <div>
          <ProductInfo />
        </div>
        {/* <Gallery /> */}
        <div>
          <StyleSelector />
        </div>
        {/* <AddToCart /> */}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Overview);
