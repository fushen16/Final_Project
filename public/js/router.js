'use strict';

App.Router = (function(){
  return Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    index: function() {
      console.log('index page');
    }
  });
})();
