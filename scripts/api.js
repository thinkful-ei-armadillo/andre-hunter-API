'use strict';

const api = (
  function() {

    const listApiFetch = function(...args) {
      let error = false;
      return fetch(...args)
        .then(res => {
          if (!res.ok) {
            error = true;
          }
          return res.json();
        })
        .then(data => {
          if (error) throw new Error(data.message);
          return data;
        });
    };

    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andre-hunter';
    const getItems = function() {
      return fetch(BASE_URL + '/items');
    };

    const updateItem = function(id, updateData) {
      return listApiFetch(BASE_URL + '/items/' + id, {
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(updateData)
      });
    };

    const createItem = function(name) {
      let newItem = JSON.stringify({
        name: name
      });

      return listApiFetch(BASE_URL + '/items', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: newItem
      });
    };

    const deleteItem = function(id) {
      return listApiFetch(BASE_URL + '/items/' + id, {
        method: 'DELETE',
        headers: new Headers({'Content-Type': 'application/json'}),
      });
    };

    return { 
      getItems,
      createItem,
      updateItem,
      deleteItem
    };
  }
)();