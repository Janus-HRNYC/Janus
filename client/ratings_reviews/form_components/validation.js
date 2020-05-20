const isEmailValid = (email) => {
  var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return check.test(String(email).toLowerCase());
};

export const validation = (form, types) => {
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

export const isFormComplete = (form, types) => {
  let keys = Object.keys(form);
  for (let el of keys) {
    if (el === 'rating' && !form[el]) return false;
    if (el === 'recommend' && !form[el]) return false;
    if (el === 'summary' && !form[el]) return false;
    if (el === 'body' && form[el].length < 50) return false;
    if (el === 'name' && !form[el]) return false;
    if (el === 'email' && !isEmailValid(form[el])) return false;
    if (
      el === 'characteristics' &&
      Object.values(form[el]).length !== Object.keys(types).length
    )
      return false;
  }
  return true;
};
