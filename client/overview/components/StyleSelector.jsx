import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Grid, Badge, Avatar, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));

const StyleSelector = ({
  styles,
  id,
  style_id,
  setStyle_id,
  index,
  setIndex,
  info,
}) => {
  // const classes = useStyles();

  return (
    <div>
      {(() => {
        for (let i = 0; i < styles.length; i++) {
          if (styles[i].style_id === style_id) {
            return (
              <Box
                style={{ fontWeight: "bold" }}
              >{`STYLE > ${styles[i].name}`}</Box>
            );
          }
        }
        return <Box style={{ fontWeight: "bold" }}>{"Loading..."}</Box>;
      })()}
      <Grid
        container
        spacing={1}
        // className={classes.root}
      >
        {styles.map((style, i = 0) =>
          style.style_id === style_id ? (
            <Grid item key={i++}>
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
                  sizes={"large"}
                  variant={"circle"}
                  src={style.photos[0]["thumbnail_url"]}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                />
              </Badge>
            </Grid>
          ) : (
            <Grid item key={i++}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                color="primary"
              >
                <Avatar
                  // className={classes.large}
                  src={style.photos[0]["thumbnail_url"]}
                  style={{ margin: "5px", width: "80px", height: "80px" }}
                  onClick={(e) => {
                    setStyle_id(style.style_id);
                    setIndex(0);
                  }}
                />
              </Badge>
            </Grid>
          )
        )}
      </Grid>
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
