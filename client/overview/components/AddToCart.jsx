import React, { useState, useEffect } from "react";
import { Avatar, Grid, Box, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const AddToCart = ({ styles, style_id }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [inventory, setInventory] = useState(0);

  const count = (val) => {
    let result = [];
    let count = 0;
    if (val <= 15) {
      for (let i = 1; i <= val; i++) {
        count += 1;
        let temp = count.toString();
        result.push(temp);
      }
    } else {
      for (let i = 1; i <= 15; i++) {
        count += 1;
        let temp = count.toString();
        result.push(temp);
      }
    }
    return result;
  };

  return (
    <Box>
      <Grid container direction="row" spacing={1}>
        {styles.map((style, i = 0) =>
          style.style_id === style_id ? (
            <Grid item key={i++} xs={6}>
              <Autocomplete
                value={selectedSize}
                onChange={(event, newSize) => {
                  setSelectedSize(newSize);
                  setInventory(style.skus[newSize]);
                }}
                id="select-size"
                autoComplete={true}
                options={Object.keys(style.skus)
                  .sort((a, b) => a - b)
                  .map((size) => (style.skus[size] > 0 ? size : null))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="SELECT SIZE"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
            </Grid>
          ) : null
        )}
        {selectedSize ? (
          <Grid item xs={4}>
            <Autocomplete
              autoComplete={true}
              options={count(inventory)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="1"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </Grid>
        ) : (
          <Grid item xs={4}>
            <Autocomplete
              autoComplete={true}
              options={["-"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="-"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </Grid>
        )}
      </Grid>
      <br />
      <Grid container direction="row" spacing={1}>
        <Grid item xs={8}>
          <Button variant="outlined" fullWidth={true}>
            ADD TO BAG
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant="outlined">❤</Button>
        </Grid>
      </Grid>
      <br />
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
