var Backbone = require('backbone');

var ListItemView = require('./list-item-view');

var template = require("../templates/list.hbs");

var ListView = Backbone.View.extend({
	render: function() {
		var that = this;
		this.collection.forEach(function(model) {
			that.$el.find('ul').append(new ListItemView(model));
		})
		
		return this;
	}
});

module.exports = ListView;