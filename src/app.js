var $ = require('jquery');
var Backbone = require('backbone');

var AppView = require('./views/app-view');
var AppRouter = require('./views/app-router');

$(function() {
	var appView = new AppView();
	new AppRouter(appView);

	Backbone.history.start();
});