import React, { useReducer } from 'react';
import FormDataDisplay from '../FormDataDisplay';
import TextInput from './TextInput';

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

export type FormState = typeof initialState;

interface Action {
	type: string;
	value: string;
}

function reducer(state: FormState, action: Action) {
	switch (action.type) {
		case 'change_firstName':
			return { ...state, firstName: action.value };
		case 'change_lastName':
			return { ...state, lastName: action.value };
		case 'change_city':
			return { ...state, city: action.value };
		case 'change_state':
			return { ...state, state: action.value };
		default:
			throw Error(`Unknown action: ${action.type}`);
	}
}

function FormWithReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);

	function handleFormUpdate(event: React.ChangeEvent<HTMLInputElement>) {
		let field = event.target.name;
		let value = event.target.value;

		dispatch({
			type: `change_${field}`,
			value,
		});
	}

	return (
		<>
			<h3>Form with reducer</h3>
			<div className="row">
				<div className="col">
					<form>
						<div>
							<label htmlFor="first-name">First Name:</label>
						</div>
						<input
							type="text"
							name="firstName"
							id="first-name"
							onChange={handleFormUpdate}
							value={state.firstName}
						/>

						{/* Last Name */}
						<div>
							<label htmlFor="last-name">Last Name:</label>
						</div>
						<input
							type="text"
							name="lastName"
							id="last-name"
							onChange={handleFormUpdate}
							value={state.lastName}
						/>

						{/* City */}
						<div>
							<label htmlFor="city">City:</label>
						</div>
						<input
							type="text"
							name="city"
							id="city"
							onChange={handleFormUpdate}
							value={state.city}
						/>

						<div>
							<label htmlFor="state">State:</label>
						</div>
						<input
							type="text"
							name="state"
							id="state"
							onChange={handleFormUpdate}
							value={state.state}
						/>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={state.firstName}
						lastName={state.lastName}
						city={state.city}
						state={state.state}
					/>
				</div>
			</div>
		</>
	);
}

export default FormWithReducer;
