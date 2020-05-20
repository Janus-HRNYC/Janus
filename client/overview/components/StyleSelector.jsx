import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Grid, Badge, Avatar } from "@material-ui/core";

const StyleSelector = ({ styles, id, style_id, setStyle_id }) => {
  // const clickHandler = (e) => {
  //   event.preventDefault();
  //   setStyle_id(e.target.value);
  // };

  // useCallback(() => (e) => setStyle_id(e.target.value));
  // useEffect(() => {
  //   setStyle_id(style_id);
  // }, [style_id]);

  return (
    <Box>
      {(() => {
        for (let i = 0; i < styles.length; i++) {
          if (styles[i].style_id === style_id) {
            return (
              <div>
                <h2>{styles[i].name}</h2>
              </div>
            );
          }
          return <h2>{"loading"}</h2>;
        }
      })()}
      <Grid container spacing={1}>
        {styles.map((style, i = 0) =>
          style.style_id === style_id ? (
            <Grid item key={i++} xs>
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
                  src={style.photos[0]["thumbnail_url"]}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                />
              </Badge>
            </Grid>
          ) : (
            <Grid item key={i++} xs>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                color="primary"
              >
                <Avatar
                  src={style.photos[0]["thumbnail_url"]}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                  // value={style.style_id}
                  // onClick={(e) => clickHandler(e)}
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
