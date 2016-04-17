var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI.js');
var startdata = require('./startData.js');

if(localStorage.getItem('workouts') == null) {
	  startdata.init();
}

AppAPI.getWorkouts();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
