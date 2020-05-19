import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider, Grid } from '@material-ui/core';

const ProductBreakdown = ({ label, value, marks }) => {
  // const useStyles = makeStyles({
  //   root: {
  //     width: 300,
  //   },
  // });

  // const classes = useStyles();

  return (
    <Grid item md={10}>
      <Typography variant='body1' gutterBottom>
        {label}
      </Typography>
      <Slider
        value={value}
        step={null}
        valueLabelDisplay='auto'
        marks={marks}
        disabled
      />
    </Grid>
  );
};

export default ProductBreakdown;
