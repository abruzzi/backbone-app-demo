var Backbone = require('backbone');

var template = require('../templates/list-item.hbs');

var ListItemView = Backbone.View.extend({
	initialize: function(model) {
		this.model = model;
		this.model.bind("change", this.render, this);
	},

	render: function() {
		this.$el.html(template(this.model.toJSON()));
		return this;
	}
});

module.exports = ListItemView;