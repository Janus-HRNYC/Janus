import React from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const description = {
  Size: {
    1: 'A size too small',
    2: '1/2 a size too small',
    3: 'Perfect',
    4: '1/2 a size too big',
    5: 'A size too wide',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Quality: {
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Length: {
    1: 'Runs short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
};

const useStyles = makeStyles((theme) => ({
  titleError: {
    color: theme.palette.error.dark,
  },
  category: {
    margin: theme.spacing(0),
    fontSize: 13,
  },
  group: {
    margin: theme.spacing(1, 0),
    marginBottom: theme.spacing(0),
  },
  col: {
    margin: theme.spacing(0),
    width: 80,
    alignContent: 'center',
  },
  label: {
    fontSize: 11,
    textAlign: 'center',
  },
  control: {
    margin: theme.spacing(1, 0),
  },
}));

const Characteristics = ({ value, setForm, char }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    e.persist();
    setForm((oldState) => {
      let id = char[e.target.name].id;
      oldState.characteristics[id] = Number(e.target.value);
      return { ...oldState };
    });
  };

  return (
    <>
      {Object.keys(char).map((type) => {
        let id = char[type].id,
          descriptionList = description[type],
          selectedValue = value[id],
          selectedDescription = descriptionList[selectedValue];

        return (
          <FormControl
            component='fieldset'
            className={classes.control}
            key={type}
          >
            <FormLabel className={classes.category}>
              {type}: {selectedDescription || 'None selected'}
            </FormLabel>
            <RadioGroup
              row
              name={type}
              value={String(selectedValue) || ''}
              onChange={handleChange}
              className={classes.group}
            >
              {['1', '2', '3', '4', '5'].map((val) => {
                return (
                  <FormControlLabel
                    value={val}
                    control={<Radio color='primary' />}
                    label={
                      <Typography className={classes.label}>
                        {val === '2' || val === '4' ? '' : descriptionList[val]}
                      </Typography>
                    }
                    labelPlacement='bottom'
                    key={val}
                    className={classes.col}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        );
      })}
    </>
  );
};

export default Characteristics;
