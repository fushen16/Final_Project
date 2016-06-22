'use strict';

App.Views.Status = (function() {
    return Backbone.View.extend({
      events: {
        'click #activeLocations': 'handleActiveLocations',
        'click #inactiveLocations': 'handleInactiveLocations'
      },

      handleActiveLocations: function(ev) {
        ev.preventDefault();
        var path = ev.currentTarget.href.replace(location.origin, '');
        vent.trigger('activeLocations:selected', { path: path });
        console.log('active status selected');
      },

      handleInactiveLocations: function(ev) {
        console.log('inactive status selected');

      }
    });
})();
