'use strict';

App.Router = (function(){
  return Backbone.Router.extend({
    routes: {
      '': 'index',
      'status/:status': 'showInventoryLocationByStatus',
      '*default': 'default'
    },

    initialize: function() {
      App.inventoryLocations = new App.Collections.InventoryLocations;
    },

    index: function() {
      //console.log('index page');
      App.inventoryLocations.fetch().then(function() {
        new App.Views.App({ collection: App.inventoryLocations });
      })
    },

    showInventoryLocationByStatus: function(status) {
      console.log("to be implementd");

    },

    default: function() {
      console.log('You have accessed an invalid address!');
    }
  });
})();
