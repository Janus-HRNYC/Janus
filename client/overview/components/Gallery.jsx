import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";

const Gallery = ({ selected_id, images }) => {
  return (
    <Box>
      <img src={images[0]} width="600px" height="600px" />
    </Box>
  );
};

export default Gallery;

// state depends on SKU / selected style
