import Axios from 'axios';
// import { NamedModulesPlugin } from 'webpack';

const error = (err) => {
  console.log('error with axios', err);
};

module.exports.janus = {

  products: {
    getList: (endpoint, cb) => {
      Axios.get(`http://18.224.200.47/products${endpoint}`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    getProductInfo: (productId, cb) => {
      Axios.get(`http://18.224.200.47/products/${productId}`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    getProductStyles: (poductId, cb) => {
      Axios.get(`http://18.224.200.47/products/${productId}/styles`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    getRelatedProducts: (endpoint, cb) => {
      Axios.get(`http://18.224.200.47/products/${productId}/related`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },
  },

  questionsAnswers: {
    get: (endpoint, cb) => {
      Axios.get(`http://18.224.200.47/qa${endpoint}`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    getAnswers: (questionId, cb) => {
      Axios.get(`http://18.224.200.47/qa/${questionId}/answers`)
        .then((res) => cb(res))
        .catch(error());
    },

    postQuestion: (productId, { body, name, email }, cb) => {
      Axios.post(`http://18.224.200.47/qa/${productId}`, {
        body,
        name,
        email,
      })
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    postAnswer: (questionId, {
      body, name, email, photos,
    }, cb) => {
      Axios.post(`http://18.224.200.47/qa/${questionId}/answers`, {
        body,
        name,
        email,
        photos,
      })
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    markQuestion: (questionId, cb) => {
      Axios.put(`http://18.224.200.47/qa/question/${questionId}/helpful`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    reportQuestion: (questionId, cb) => {
      Axios.put(`http://18.224.200.47/qa/question/${questionId}/report`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },
  },

  reviews: {
    getList: (productId, cb) => {
      Axios.get(`http://18.224.200.47/reviews/${productId}/list`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    getMeta: (productId, cb) => {
      Axios.get(`http://18.224.200.47/reviews/${productId}/meta`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    postReview: (productId, {
      rating, summary, body, recommend, name, email, photos, characteristics,
    }, cb) => {
      Axios.post(`http://18.224.200.47/reviews/${productId}`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    markReview: (reviewId, cb) => {
      Axios.put(`http://18.224.200.47/reviews/helpful/${reviewId}`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    reportReview: (reviewId, cb) => {
      Axios.put(`http://18.224.200.47/reviews/report/${reviewId}`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

  },

  cart: {
    get: (endpoint, cb) => {
      Axios.get(`http://18.224.200.47/cart${endpoint}`)
        .then((res) => cb(res))
        .catch((err) => error(err));
    },

    post: (endpoint, { userToken, skuId }, cb) => {
      Axios.post('http://18.224.200.47/cart', {
        user_token: userToken,
        sku_id: skuId,
      })
        .then((res) => cb(res))
        .catch((err) => error(err));
    },
  },
};


