'use strict';

const api = (
  function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andre-hunter';
    const getItems = function() {
      return fetch(BASE_URL + '/items');
    };

    const updateItem = function(id, updateData) {
      return fetch(BASE_URL + '/items/' + id, {
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(updateData)
      });
    };

    const createItem = function(name) {
      let newItem = JSON.stringify({
        name: name
      });

      return fetch(BASE_URL + '/items', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: newItem
      });
    };

    return { 
      getItems,
      createItem,
      updateItem
    };
  }
)();