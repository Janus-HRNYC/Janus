import React from 'react';
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
  const displayPhoto = () => {
    if (!props.item) {
      return (
        null
      )
    } else {

  let photoSrc = '';
  photoSrc = getDefaultImg(props.item.styles);
  return (
    <CardMedia
      className={classes.media}
      image={photoSrc}
      title={props.item.name}
    />
  )
}
  }

const displayComparison = () => {
  if (!props.item && !props.currentItem) {
    return (
      null
    )
  } else {
    return (
      < ComparisonModal currentItem={props.currentItem} compareItem={props.item} />
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
        {props.item.category}
      </Typography>
      <Typography variant="body2" component="p">
        {props.item.name}
        <br />
        {`$${props.item.price}`}
      </Typography>
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
