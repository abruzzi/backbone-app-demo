var Backbone = require('backbone');

var ListItemCollection = require('./collections/list-item-collection');
var ListView = require('./views/list-view');

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "list"
  },

  initialize: function(options){
    this.appView = options.appView;
  },

  list: function(){
    var collection = new ListItemCollection();

    collection.reset([{
      title: "Asia", description: "Hello darkness"
    }, {
      title: "Africa", description: "My old friend"
    }]);

    var listView = new ListView({
      collection: collection
    });

    this.appView.showView(listView);
  }
});

module.exports = AppRouter;