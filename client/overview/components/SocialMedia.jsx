import React, { useState, useEffect } from "react";
import { Grid, IconButton, Icon } from "@material-ui/core";

const SocialMedia = () => {
  return (
    <Grid container direction="row" spacing={1}>
      <IconButton
        style={{
          backgroundColor: "#3B5998",
          color: "white",
          margin: "10px",
          width: "60px",
          height: "60px",
        }}
      >
        <Icon href="facebook.com" className="fa fa-facebook"></Icon>
      </IconButton>
      <IconButton
        style={{
          backgroundColor: "#55ACEE",
          color: "white",
          margin: "10px",
          width: "60px",
          height: "60px",
        }}
      >
        <Icon href="twitter.com" className="fa fa-twitter"></Icon>
      </IconButton>
      <IconButton
        style={{
          backgroundColor: "#cb2027",
          color: "white",
          margin: "10px",
          width: "60px",
          height: "60px",
        }}
        // onClick={pinterest.com}
      >
        <Icon href="pinterest.com" className="fa fa-pinterest"></Icon>
      </IconButton>
    </Grid>
  );
};

export default SocialMedia;
