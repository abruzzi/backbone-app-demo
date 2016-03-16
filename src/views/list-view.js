var Backbone = require('backbone');

var ListItemView = require('./list-item-view');

var template = require("../templates/list.hbs");

var ListView = Backbone.View.extend({
	render: function() {
		this.$el.html(template());
		var that = this;
		this.collection.forEach(function(model) {
			that.$el.find('ul').append(new ListItemView(model).render().el);
		})
		
		return this;
	}
});

module.exports = ListView;