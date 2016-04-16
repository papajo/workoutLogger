var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
		showForm: function(){
			AppDispatcher.handleViewAction({
				actionType: AppConstants.SHOW_FORM
			})
		}
}

module.exports = AppActions;
