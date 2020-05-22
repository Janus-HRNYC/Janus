import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getDefaultImg } from '../utility/relatedUtility.js';
import ComparisonModal from './ComparisonModal';
import { salePrice, avgRatings } from './../utility/relatedUtility.js';



const useStyles = makeStyles({  
  media: {
    paddingTop: '100%', // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardHeader: {
 
  }

});

const relatedItemsCard = (props) => {
  const {
    item,
    id,
    info,
  } = props;

  useEffect(() => {
    displayComparison()
  }, [])
  const displayPhoto = () => {
    if (!item.styles) {
      return (
        null
      )
    } else {
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
  const stylePrice = () => {
    if (!results) {
      return (
        <Typography variant="body2" component="p">
          {item.name}
          <br />
          {`$${item.price}`}
        </Typography>
      )
    } else if (results[0] !== 'S') {
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
    if (!info && !item) {
      return (
        null
      )
    } else {
      return (
        < ComparisonModal currentItem={item} info={info} />
      )
    }
  }
  const showRating = () => {
    let rating = avgRatings(item.ratings);
    if (rating === 0) {
      return (
        <Box component='fieldset' mb={3} borderColor='transparent' visibility='hidden'>
          <Rating name='read-only' value={0} readOnly />
        </Box>
      )
    } else {
      return (
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='read-only' value={(rating)} readOnly />
        </Box>
      )
    }
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
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
        {showRating()}
      </CardContent>
    </Card>
  );
}
export default relatedItemsCard;