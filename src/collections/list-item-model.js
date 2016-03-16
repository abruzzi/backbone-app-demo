var Backbone = require('backbone');

var ListItemModel = Backbone.Model.extend({
	defaults: {
		title: "",
		description: ""
	}
});

module.exports = ListItemModel;