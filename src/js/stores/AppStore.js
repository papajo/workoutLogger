var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _items = [];
var _showForm = false;
var AppStore = assign({}, EventEmitter.prototype, {
	showForm: function() {
			_showForm = true;
	},
	getShowForm: function() {
			return _showForm;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SHOW_FORM:
				AppStore.showForm();
				AppStore.emit(CHANGE_EVENT);
				break;
	}

	return true;
});

module.exports = AppStore;
