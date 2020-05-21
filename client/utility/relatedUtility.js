module.exports = {
  getDefaultImg: (stylesArr) => {
    /* this function checks if the default? is equal to 1 then returns the img for that path*/
    let results = '';
    for (const ele of stylesArr) {
      results = ele.photos[0].url;
      if (ele['default?'] === 1 ) {
        return results = ele.photos[0].url;
      }
    }
    // if no default value will return a placeholder img of photo not available.
    return results === '' ? '../../public/No_Default.jpg' : results;
  },
  comparisonBuilder: (current, compare) => {
    let results = {};
    let array = [];
    for (key in current) {
      array.push(key, current[key]);
    }
    console.log(array);
    return array;
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
  }
}

//feature: "UV Protection", value: "null"}
// sale_price: "0"