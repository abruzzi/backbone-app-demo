var Backbone = require('backbone');

var ListItemView = require('./views/list-item-view');

var template = require("./views/list.hbs");
var ListView = Backbone.View.extend({
	render: function() {
		this.$el.html(template());
		
		this.collection.forEach(function(model) {
			this.$el.find('ul').append(new ListItemView(model));
		})
		
		return this;
	}
});

module.exports = ListView;