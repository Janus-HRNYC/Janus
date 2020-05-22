module.exports = {
  getDefaultImg: (stylesArr) => {
    if (!stylesArr) {
      return '../../public/No_Default.jpg';
    }
    /* this function checks if the default? is equal to 1 then returns the img for that path*/
    let results = '';
    for (const ele of stylesArr) {
      console.log('|IN FOR LOOP |', ele.photos[0]);
      results = ele.photos[0].thumbnail_url;
      if (ele['default?'] === 1) {
        console.log('|PICTURE| ', results )
        if (ele.photos[0].thumbnail_url === null) {
          return '../../public/No_Default.jpg';
        }
        return results = ele.photos[0].thumbnail_url || ele.photos[1].thumbnail_url || '../../public/No_Default.jpg';
      } 
    }
    console.log('pic', results);
    // if no default value will return a placeholder img of photo not available.
    return results ? '../../public/No_Default.jpg': results;
  },
  comparisonBuilder: (current, compare) => {
    let results = {};
    if (current.features) {
      current.features.forEach((feature) => {
        results[feature.feature] = {
          left: feature.value
        }
      });
    }
    if (compare.features) {
      compare.features.forEach((feature) => {
        if (results[feature.feature] !== undefined) {
          results[feature.feature].compare = feature.value;
        } else {
          results[feature.feature] = {
            right: feature.value
          }
        }
      });
    }
    return results;
  },
  salePrice: (styleArr) => {
    let results = '';
    styleArr.forEach((ele) => {
      if (ele['default?'] === 1) {
        if (parseInt(ele.sale_price) === 0 || !ele.sale_price) {
          results = `${parseInt(ele.original_price)}`;
        } else {
          results = `SALE ${parseInt(ele.sale_price)}`;
        }
      }
    })
    return results;
  },
  avgRatings: (ratingObj) => {
    if (!ratingObj) return 0;
    let avg;
    let votes = 0
    let sum = 0;
    for (const key in ratingObj) {
      if (ratingObj[key]) {
        sum += parseInt(key);
        votes += parseInt(ratingObj[key]);
      }
    }
    if (sum === 0) { return 0 };
    if (votes === 0) { return 0 };

    avg = (sum / votes)
    if (!Number.isInteger(avg)) {
      avg = Number(Math.round(avg).toFixed(1));
    }
    return avg;
  },
};