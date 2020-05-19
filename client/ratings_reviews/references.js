const REFERENCES = {
  ADDREVIEW: {
    formDefault: {
      rating: 0,
      recommend: '',
      characteristics: {},
      summary: '',
      body: '',
      email: '',
      name: '',
      photos: [],
    },
  },
  CHARACTERISTICS: {
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
  },
  TEXTFIELDFORM: {
    summary: {
      multiline: false,
      required: true,
      maxLength: 60,
      placeholder: `Example: Best purchase ever!`,
      helperText: ``,
    },
    body: {
      multiline: true,
      required: true,
      maxLength: 1000,
      placeholder: `Why did you like the product or not?`,
      helperText: `Minimum required characters: 50`,
    },
    name: {
      multiline: false,
      required: true,
      maxLength: 60,
      placeholder: `Example: jackson11!`,
      helperText: `For privacy reasons, do not use your full name or email address`,
    },
    email: {
      multiline: false,
      required: true,
      maxLength: 60,
      placeholder: `Example: jackson11@email.com`,
      helperText: `For authentication reasons, you will not be emailed`,
    },
  },
  RATINGS: {
    fitMarks: [
      {
        value: 0,
        label: 'Too Small',
      },
      {
        value: 50,
        label: 'Perfect',
      },
      {
        value: 100,
        label: 'Too Large',
      },
    ],
    comfortMarks: [
      {
        value: 0,
        label: 'Poor',
      },
      {
        value: 100,
        label: 'Perfect',
      },
    ],
  },
};

export default REFERENCES;
