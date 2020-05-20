import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Grid, Badge, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const StyleSelector = ({ styles, id, style_id, setStyle_id }) => {
  const classes = useStyles();
  const clickHandler = (e) => {
    event.preventDefault();
    setStyle_id(e.target.value);
  };

  // useCallback(() => (e) => setStyle_id(e.target.value));
  // useEffect(() => {
  //   setStyle_id(style_id);
  // }, [style_id]);

  return (
    <div>
      {(() => {
        for (let i = 0; i < styles.length; i++) {
          if (styles[i].style_id === style_id) {
            return (
              <div>
                <h2>{`STYLE > ${styles[i].name}`}</h2>
              </div>
            );
          }
        }
        return <h2>{"loading..."}</h2>;
      })()}
      <Grid container spacing={1} className={classes.root} xs={"auto"}>
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
                  className={classes.large}
                  src={style.photos[0]["thumbnail_url"]}
                  style={{ margin: "10px", width: "80px", height: "80px" }}
                  // value={}
                  onClick={(e) => setStyle_id(style.style_id)}
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
