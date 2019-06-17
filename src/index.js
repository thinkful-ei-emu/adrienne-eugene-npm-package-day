'use strict';

import $ from 'jquery';
import shoppingList from './shopping-list';
import api, { getItems, createItem, updateItem, deleteItem } from './api';
import store from './store';
// import './index.css';



$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);