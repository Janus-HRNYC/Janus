import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';


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

const AddOutFitCard = ({ addOutfit, id, styles }) => {
  console.log('|STYLES||', styles);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => { addOutfit(id, styles) }}>
            <AddIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Add to Outfit
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
        <Box component='fieldset' mb={3} borderColor='transparent' visibility='hidden'>
            <Rating readOnly />       
        </Box>
      </CardContent>
    </Card>
  );
}

export default AddOutFitCard
