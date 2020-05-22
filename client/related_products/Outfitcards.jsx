import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
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

const Outfitcards = ({ item, removeOutfit}) => {
  console.log('item', item);
   const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return ( 
    <Card>
      <CardHeader        
        action={
          <IconButton aria-label="settings" onClick={() => { removeOutfit(item.id)}}>
            <HighlightOffIcon />
          </IconButton>
        }      
      />
      <CardContent>        
        <Typography variant="h5" component="h2">          
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {item.category}
        </Typography>
        <Typography variant="body2" component="p">
          {item.name}
          <br />
          {`$${item.default_price}`}
        </Typography>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Rating name='read-only' value={5} readOnly />
        </Box>
      </CardContent>      
    </Card>
  );
}

export default Outfitcards
