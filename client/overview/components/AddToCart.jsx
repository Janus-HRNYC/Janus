import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
import { Avatar, Grid, Box } from "@material-ui/core";

const AddToCart = () => {
  return (
    <Box>
      <Grid container direction="row" spacing={1}>
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
            backgroundColor: "red",
            margin: "10px",
            width: "60px",
            height: "60px",
          }}
        >
          pintrest
        </Avatar>
      </Grid>
    </Box>
  );
};

export default AddToCart;
