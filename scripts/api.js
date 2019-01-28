'use strict';

const api = (
  function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andre-hunter';
    const getItems = function() {
      fetch(BASE_URL + '/items').then(res => 
        res.json())
        .then (json => {
          console.log(json);
        });
    };
    return { 
      getItems
    };
  }
)();