import { useReducer, useState } from 'react';
import FormDataDisplay from './FormDataDisplayContext';
import TextInput from './TextInputContextAndReducer';
import { FormDispatcherContext, FormStateContext } from './FormContext';
import { reducer } from './form-reducer';

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

export type FormState = typeof initialState;

export interface FormContextProps {
	state: FormState;
	updater: (field: string, value: string) => void;
}

function FormWithContextAndReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<FormStateContext.Provider value={state}>
			<FormDispatcherContext.Provider value={dispatch}>
				<h3>Form with context</h3>
				<div className="row">
					<div className="col">
						<form>
							{/* First Name */}
							<TextInput name="firstName">First Name:</TextInput>
							{/* Last Name */}
							<TextInput name="lastName">Last Name:</TextInput>
							{/* City */}
							<TextInput name="city">City:</TextInput>
							{/* State */}
							<TextInput name="state">State:</TextInput>
						</form>
					</div>
					<div className="col">
						<FormDataDisplay />
					</div>
				</div>
			</FormDispatcherContext.Provider>
		</FormStateContext.Provider>
	);
}

export default FormWithContextAndReducer;
