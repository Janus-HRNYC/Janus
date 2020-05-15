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
import StarBorderIcon from '@material-ui/icons/StarBorder';
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

const relatedItemsCard = ({item}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card>
      <CardHeader        
        action={
          <IconButton aria-label="settings">
            <StarBorderIcon />
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
export default relatedItemsCard;

// TODO: GET META DATA
// TODO: 
// TODO: 
