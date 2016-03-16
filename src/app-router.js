var Backbone = require('backbone');

var ListItemCollection = require('./collections/list-item-collection');
var ListView = require('./views/list-view');
var ListItemView = require('./views/list-item-view');

Backbone.View.prototype.close = function(){
  this.remove();
  this.unbind();
  if (this.onClose){
    this.onClose();
  }
}

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "list",
    "list": "list",
    "list/:id": "listItem"
  },

  initialize: function(options){
    this.appView = options.appView;

    this.collection = new ListItemCollection();
    this.collection.reset([{
      id:1, title: "Asia", description: "Hello darkness"
    }, {
      id:2, title: "Africa", description: "My old friend"
    }]);
  },

  list: function(){
    var listView = new ListView({
      collection: this.collection
    });

    this.appView.showView(listView);
  },

  listItem: function(id) {
    var item = this.collection.get(id);
    var listItemView = new ListItemView(item);

    this.appView.showView(listItemView);
  }
});

module.exports = AppRouter;