import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './Products.jsx';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
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
  const { products, productId, getProducts, setProductId } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = (id) => {
    console.log('Value: ', id);
    setProductId(id);
    setShow(!show);
  };

  const AppBarContainer = () => (
    <AppBar position='fixed'>
      <Toolbar>
        <StorefrontIcon className={classes.icon} />
        <Typography variant='h6' color='inherit' noWrap>
          Janus Online
        </Typography>
      </Toolbar>
    </AppBar>
  );

  return (
    <>
      <Router>
        <CssBaseline />
        <AppBarContainer />
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
                              onClick={() => handleClick(item.id)}
                            >
                              View
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
        <Switch>
          <Route exact path='/products/:id' component={Products}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Home;
