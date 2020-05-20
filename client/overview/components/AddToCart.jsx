import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
import { Avatar, Grid, Box, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const AddToCart = ({ styles, style_id }) => {
  const [selectedSize, setSelectedSize] = useState(null);

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
                }}
                id="select-size"
                autoComplete={true}
                options={Object.keys(style.skus)
                  .sort((a, b) => a - b)
                  .map((size) => (style.skus[size] > 0 ? size : null))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Size"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              />
            </Grid>
          ) : null
        )}
        <Grid item xs={3}>
          {
            // styles.map((style, i = 0) =>
            //  (
            <Autocomplete
              id="select-quantity"
              autoComplete={true}
              options={styles.forEach((style) =>
                selectedSize ? count(style.skus[selectedSize]) : ["1"]
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Quantity"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
            //   ) : (
            //     <Autocomplete
            //       id="select-quantity"
            //       autoComplete={true}
            //       options={["1"]}
            //       renderInput={(params) => (
            //         <TextField
            //           {...params}
            //           label="Quantity"
            //           margin="normal"
            //           variant="outlined"
            //           InputProps={{ ...params.InputProps, type: "search" }}
            //         />
            //       )}
            //     />
            //   )
          }
        </Grid>
      </Grid>
      <br />
      <Grid container direction="row" spacing={1}>
        <Grid item>
          <Button>Add to Cart</Button>
        </Grid>
        <Grid item></Grid>
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
// style.skus[size] > 0 && style.skus[size] <= 15
//                   //   ? "5"
//                   //   : style.skus[size] > 0 && style.skus[size] > 15
//                   //   ? `${[...Array(14).keys()]}`
//                   //   : null

// styles.map((style, i = 0) =>
//           style.style_id === style_id ? (
//             <Grid item key={i++} xs={3}>
//               <Autocomplete
//                 id="test"
//                 autoComplete={true}
//                 options={Object.keys(style.skus).map((size) =>

//                 )}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     label="Quantity"
//                     margin="normal"
//                     variant="outlined"
//                     InputProps={{ ...params.InputProps, type: "search" }}
//                   />
//                 )}
//               />
//             </Grid>
//           ) : null
//         )
