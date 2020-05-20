import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getDefaultImg } from '../utility/relatedUtility.js';
import ComparisonModal from './ComparisonModal';
import { salePrice } from './../utility/relatedUtility.js';


const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});

const relatedItemsCard = (props) => {
  const {
    item,
    id,
    compare,
    onGetCurrent,
  } = props;

  useEffect(() => {
    displayComparison()
  
  }, []) 

  const displayPhoto = () => {
    console.log(item);
    if (!item.styles) {
      return (
        null
      )
    } else {
      console.log(item.styles);
      let photoSrc = '';
      photoSrc = getDefaultImg(item.styles);
      return (
        <CardMedia
           className={classes.media}
           image={photoSrc}
           title={item.name}
        />
      )
    }
  }
  let results = salePrice(item.styles);
  console.log('item', results);
  const stylePrice = () => {
    if (!results) {
      return (
        <Typography variant="body2" component="p">
          {item.name}
          <br />
          {`$${item.price}`}
        </Typography>
      )
    } else if (results[0] !== 'S' ) {
      return (
        <Typography variant="body2" component="p">
          {item.name}
          <br />
          {`$${results}`}
        </Typography>
      )
    } else {
      return (
        <Typography variant="body2" component="p" color='red'>
          {item.name}
          <br />
          {`$${results}`}
        </Typography>
      )
    }
  }
  const displayComparison = () => {
    if (!compare && !item) {
      return (
        null
      )
    } else {
      return (
        < ComparisonModal currentItem={item} onGetCurrent={onGetCurrent} compareItem={compare} id={id}/>
      )
    }
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            {displayComparison()}          
          </IconButton>
        }

      />
      {displayPhoto()}
      <CardContent>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {item.category}
        </Typography>
        {stylePrice()}
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='read-only' value={5} readOnly />
        </Box>
      </CardContent>
    </Card>
  );
}
export default relatedItemsCard;

// TODO: GET META DATA
// TODO: 
// TODO: 
