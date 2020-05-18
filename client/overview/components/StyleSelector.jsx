import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Badge, Avatar } from "@material-ui/core";

const StyleSelector = ({ thumbnails, styles, selected, id }) => {
  return (
    <Box>
      <h2>{"Style >"}</h2>
      <Grid container spacing={1}>
        {thumbnails.map((style, i = 0) =>
          styles[i].style_id === selected ? (
            <Grid item key={i++} xs={3}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                badgeContent="✔"
                color="primary"
              >
                <Avatar
                  src={style}
                  // onClick={}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                />
              </Badge>
            </Grid>
          ) : (
            <Grid item key={i++} xs={3}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                // badgeContent="✔"
                color="primary"
              >
                <Avatar
                  src={style}
                  // onClick={}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                />
              </Badge>
            </Grid>
          )
        )}
      </Grid>
    </Box>
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
