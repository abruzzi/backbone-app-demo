var Backbone = require('backbone');

var template = require('./tempaltes/list-item.hbs');

var ListItemView = Backbone.View.extend({
	initialize: function() {
		this.model.bind("change", this.render, this);
	},

	render: function() {
		this.$el.html(template(this.model));
		return this;
	}
});

module.exports = ListItemView;