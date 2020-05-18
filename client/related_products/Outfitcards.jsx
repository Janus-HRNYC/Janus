import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Outfitcards = (props) => {
   const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardHeader        
        action={
          <IconButton aria-label="settings" onClick={() => { props.removeOutfit(props.item.id)}}>
            <HighlightOffIcon />
          </IconButton>
        }        
       
      />
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

export default Outfitcards