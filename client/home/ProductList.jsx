import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Products from './Products.jsx';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { products, showProduct, show } = props;

  return (
    <>
      <Router>
        {!show ? (
          <main>
            <Container className={classes.cardGrid} maxWidth='md'>
              <Grid container spacing={4}>
                {products.map((item) => {
                  let loc = '/products/' + item.id;
                  return (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image='https://source.unsplash.com/random'
                          title='Image title'
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant='h5' component='h2'>
                            {item.name}
                          </Typography>
                          <Typography>{item.slogan}</Typography>
                        </CardContent>
                        <CardActions>
                          <Link to={loc}>
                            <Button
                              size='small'
                              color='primary'
                              onClick={() => showProduct(item.id)}
                            >
                              View Details
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </main>
        ) : null}
        {!show ? null : (
          <Switch>
            <Route path='/products/:id' component={Products}></Route>
          </Switch>
        )}
      </Router>
    </>
  );
};

export default Home;
