App.Models.InventoryLocation = Backbone.Model.extend({
  idAttribute: '_id',
  defaults:{
    name: '',
    type: '',
    status: 'Active',
    latitude: '',
    longitude: '',
    product: '',
    productQty: 0
  }
});
