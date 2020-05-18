const isEmailValid = (email) => {
  var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return check.test(String(email).toLowerCase());
};

const validation = (form, types) => {
  let errors = {};

  if (!form.rating) errors.rating = 'ratings validated';
  if (!form.recommend) errors.recommend = 'recommend validated';
  if (!form.summary) errors.summary = 'summary validated';
  if (form.body.length < 50) errors.body = 'body validated';
  if (!form.name) errors.name = 'name validated';
  if (!isEmailValid(form.email)) errors.email = 'email validated';
  if (Object.values(form.characteristics).length !== Object.keys(types).length)
    errors.characteristics = 'characteristics validated';

  return Object.keys(errors).length ? errors : false;
};

export default validation;
