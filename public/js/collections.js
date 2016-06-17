App.Collections.InventoryLocations = Backbone.Collection.extend({
  model: App.Models.InventoryLocation,
  url:'/locations'
});
