var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var uuid = require('node-uuid');

var AddForm = React.createClass({
	render: function(){
		return(
			<div>
				<form onSubmit={this.onSubmit} className="form-group">
					<select className="form-control" ref="type">
							<option value="Jogging">Jogging</option>
							<option value="Weight Lifting">Weight Lifting</option>
							<option value="Elliptical">Elliptical</option>
							<option value="Yoga">Yoga</option>
							<option value="Other">Other</option>
					</select>
					<div className="form-group">
							<input type="text" className="form-control" ref="minutes" placeholder="Minutes" />
					</div>
					<div className="form-group">
							<input type="text" className="form-control" ref="miles" placeholder="Miles (Optional)" />
					</div>
					<button type="submit" className="btn btn-success btn-block">Log Workout</button>
				</form>
			</div>
		);
	},
	onSubmit: function(e) {
		e.preventDefault();
		var workout = {
				id: uuid.v4(),
				type: this.refs.type.value.trim(),
				minutes: this.refs.minutes.value.trim(),
				miles: this.refs.miles.value.trim(),
				date: new Date()
		}
		console.log(workout);
	}
});
module.exports = AddForm;
