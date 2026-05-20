import React, { useRef, useState } from 'react';
import FormDataDisplay from './FormDataDisplay';

export interface FormState {
	firstName: string;
	lastName: string;
	city: string;
	state: string;
}

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

function FormDataRefFields() {
	const [formState, setFormState] = useState<FormState>(initialState);

	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const cityRef = useRef<HTMLInputElement>(null);
	const stateRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	function handleFormUpdate() {
		// Update the entire state object reference so React can detect it
		let nextState: FormState = { ...formState };

		nextState.firstName = firstNameRef.current!.value;
		nextState.lastName = lastNameRef.current!.value;
		nextState.city = cityRef.current!.value;
		nextState.state = stateRef.current!.value;

		setFormState(nextState);
	}

	return (
		<>
			<h3>Event Object</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<div>
							<label htmlFor="first-name">First Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="firstName"
								id="first-name"
								ref={firstNameRef}
							/>
						</div>
						{/* Last Name */}
						<div>
							<label htmlFor="last-name">Last Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="lastName"
								id="last-name"
								ref={lastNameRef}
							/>
						</div>
						{/* City */}
						<div>
							<label htmlFor="city">City: </label>
						</div>
						<div>
							<input
								type="text"
								name="city"
								id="city"
								ref={cityRef}
							/>
						</div>
						{/* State */}
						<div>
							<label htmlFor="state">State: </label>
						</div>
						<div>
							<input
								type="text"
								name="state"
								id="state"
								ref={stateRef}
							/>
						</div>
						<div className="mt-1">
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleFormUpdate}
							>
								Update Display
							</button>
						</div>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={formState.firstName}
						lastName={formState.lastName}
						city={formState.city}
						state={formState.state}
					/>
				</div>
			</div>
		</>
	);
}

export default FormDataRefFields;
