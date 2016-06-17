//Global App Views
App.Views.App = Backbone.View.extend({
  initialize: function() {
    var addInventoryLocationView = new App.Views.AddInventoryLocation(
      { collection: App.inventoryLocations });
    var allInventoryLocationsView = new App.Views.InventoryLocations({
      collection: App.inventoryLocations }).render();
    //console.log(this.collection.toJSON());
    $('#allInventoryLocations').append(allInventoryLocationsView.el);
  }
});

//add inventory location View
App.Views.AddInventoryLocation = Backbone.View.extend({
  el: '#addInventoryLocation',

  initialize: function() {
    this.name = $('#inventorylocationName');
    this.type = $('#inventorylocationType');
    this.status = $('#inventorylocationStatus');
    this.latitude = $('#inventorylocationLatitude');
    this.longitude = $('#inventorylocationLongitude');
    this.product = $('#inventorylocationProduct');
    this.productQty = $('#inventorylocationProductQty');
  },

  events: {
    'submit': 'addInventoryLocation'
  },

  addInventoryLocation: function(e){
    e.preventDefault();

    this.collection.create({
      name: this.name.val(),
      type: this.type.val(),
      status: this.status.val(),
      latitude: this.latitude.val(),
      longitude: this.longitude.val(),
      product: this.product.val(),
      productQty: this.productQty.val()
    }, { wait: true });

    //console.log(this.collection);
    this.clearForm();
  },

  clearForm: function() {
    this.name.val('');
    this.type.val('');
    this.status.val('');
    this.latitude.val('');
    this.longitude.val('');
    this.product.val('');
    this.productQty.val('');
  }
});

//all inventory location View
App.Views.InventoryLocations = Backbone.View.extend({
  tagName: 'tbody',

  initialize: function() {
    this.collection.on('add', this.addOne, this);
    //this.collection.on('remove', this.render(), this);
  },

  render: function() {
    this.collection.each( this.addOne, this);

    return this;
  },

  addOne: function(inventoryLocation) {
    var inventoryLocationView = new App.Views.InventoryLocation(
      { model: inventoryLocation });
    this.$el.append(inventoryLocationView.render().el);
  }
});

//single inventory location View
App.Views.InventoryLocation = Backbone.View.extend({
  tagName: 'tr',

  template: template('allInventoryLocationsTemplate'),

  events: {
    'click .delete-location': 'removeLocation'
  },

  removeLocation: function() {
    this.model.destroy();
    this.remove();
    //console.log('destroyed');
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  }
});
