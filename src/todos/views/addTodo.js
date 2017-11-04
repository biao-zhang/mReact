import React, {Component} from 'react';

import {connect} from 'react-redux';

import {addTodo} from '../actions';

class AddTodo extends Component {
	constructor (props, context) {
		super(props, context);
		this.onSubmit = this.onSubmit.bind(this);
		this.refInput = this.refInput.bind(this);
	}

	onSubmit (ev) {
		ev.preventDefault();

		const input = this.input;

		if (!input.value.trim()) {
			return;
		} else {
			this.props.onAdd(input.value);
			input.value = '';
		}
	}

	refInput (node) {
		this.input = node;
	}

	render () {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text"  ref={this.refInput} />
					<button type="submit">添加</button>
				</form>
			</div>
		);
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text)=>{
			return dispatch(addTodo(text));
		}
	};
}

export default connect(null, mapDispatchToProps)(AddTodo);