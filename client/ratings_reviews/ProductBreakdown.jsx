import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider } from '@material-ui/core';

const ProductBreakdown = ({ label, value, marks }) => {
  const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id='discrete-slider-restrict' gutterBottom>
        {label}
      </Typography>
      <Slider
        value={value}
        aria-labelledby='discrete-slider-restrict'
        step={null}
        valueLabelDisplay='auto'
        marks={marks}
        disabled
      />
    </div>
  );
};

export default ProductBreakdown;
