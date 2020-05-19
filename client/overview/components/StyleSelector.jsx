import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Badge, Avatar } from "@material-ui/core";

const StyleSelector = ({
  thumbnails,
  styles,
  selected_id,
  getSelected,
  id,
}) => {
  // const clickHandler = (e) => {
  //   if (styles[i].style_id !== selected_id) {
  //     getSelected(id, e.target.value);
  //   }
  // };
  // console.log(style.photos.thumbnail_url)
  return (
    <Box>
      {(() => {
        for (let i = 0; i < styles.length; i++) {
          if (styles[i].style_id === selected_id) {
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
          style.style_id === selected_id ? (
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
                  // value={styles[i].style_id}
                  // onClick={clickHandler()}
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
                  // value={styles[i].style_id}
                  // onClick={(e) => {
                  //   if (styles[i].style_id !== selected_id) {
                  //     getSelected(id, e.target.value);
                  //   }
                  // }}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                />
              </Badge>
            </Grid>
          )
        )}
        {/* {thumbnails.map((thumbnail, i = 0) =>
          styles[i].style_id === selected_id ? (
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
                  src={thumbnail}
                  // value={styles[i].style_id}
                  // onClick={clickHandler()}
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
                  src={thumbnail}
                  // value={styles[i].style_id}
                  // onClick={(e) => {
                  //   if (styles[i].style_id !== selected_id) {
                  //     getSelected(id, e.target.value);
                  //   }
                  // }}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                />
              </Badge>
            </Grid>
          )
        )} */}
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
