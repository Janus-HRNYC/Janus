import React, { useState, useEffect } from "react";
import { Grid, Box, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const AddToCart = ({ styles, style_id, info }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [inventory, setInventory] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [bag, setBag] = useState({});

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

  const addToBagButton = () => {
    if (selectedSize !== null && inventory > 0) {
      return (
        <Grid item xs={8}>
          <Button
            variant="outlined"
            fullWidth={true}
            onClick={() => setBag({ info, style_id, selectedSize, quantity })}
          >
            ADD TO BAG
          </Button>
        </Grid>
      );
    }
    if (inventory === 0) {
      return;
    }
  };

  return (
    <div>
      {selectedSize === null ? <p>Please select size</p> : null}
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
                options={
                  Object.values(style.skus).reduce((acc, val) => acc + val) < 1
                    ? ["OUT OF STOCK"]
                    : Object.keys(style.skus)
                        .sort((a, b) => a - b)
                        .map((size) => (style.skus[size] > 0 ? size : null))
                }
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
              value={quantity}
              onChange={(event, quantity) => {
                setQuantity(quantity);
              }}
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
              disabled={true}
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
      <Grid container direction="row" spacing={1}>
        {(() => addToBagButton())()}
        <Grid item xs>
          <Button variant="outlined">❤</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddToCart;

/* {(() => {
          if (selectedSize !== null && inventory > 0) {
            return (
              <Grid item xs={8}>
                <Button
                  variant="outlined"
                  fullWidth={true}
                  onClick={() => setBag(info)}
                >
                  ADD TO BAG
                </Button>
              </Grid>
            );
          }
          if (selectedSize === null) {
            return "test";
          }
          if (inventory === 0) {
            return "test2";
          }
        })()} */
