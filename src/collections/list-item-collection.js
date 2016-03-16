var Backbone = require('backbone');
var ListItemModel = require('./list-item-model');

var ListItemCollection = Backbone.Collection.extend({
	model: ListItemModel
});

module.exports = ListItemCollection;