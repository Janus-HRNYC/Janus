/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Box, Grid, Container } from '@material-ui/core';
// import axios from 'axios';
import ReviewList from './ReviewList.jsx';

const Reviews = ({ reviewResult, getReviews }) => {
  // const [list, setList] = useState([]);

  // const getReviews = (productId, sort, count = 50) => {
  //   let query = {
  //     params: {
  //       sort: sort,
  //       count: count,
  //     },
  //   };
  //   return axios
  //     .get(`http://18.224.200.47/reviews/${productId}/list`, query)
  //     .then((res) => {
  //       console.log('Successful : ', res.data);
  //       setList(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log('Error : ', err);
  //     });
  // };

  useEffect(() => {
    getReviews(27, null, 100);
  }, []);

  return (
    <Box>
      <Container>
        <h2>RATINGS & REVIEWS</h2>
        <Grid container direction='row' justify='space-between'>
          <Grid item md={4}>
            First Column
            <h4> TODO: This is where the Meta component</h4>
          </Grid>
          <Grid item md={8}>
            Second Column
            <ReviewList list={reviewResult} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Reviews;
