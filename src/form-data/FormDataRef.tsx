import React, { useRef, useState } from 'react';
import FormDataDisplay from './FormDataDisplay';

export interface FormState {
	firstName: string;
	lastName: string;
	city: string;
	state: string;
}

const initialState: FormState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

function FormDataRef() {
	const [formState, setFormState] = useState<FormState>(initialState);

	const formRef = useRef<HTMLFormElement>(null);

	function handleFormUpdate() {
		// Update the entire state object reference so React can detect it
		let nextState: FormState = { ...formState };
		let formElements = formRef.current!.elements;
		let fields = Object.keys(initialState) as Array<keyof FormState>;

		for (let field of fields) {
			if (formElements.namedItem(field)) {
				// @ts-expect-error('Complex typing')
				nextState[field] = formElements.namedItem(field);
			}
		}

		setFormState(nextState);
	}

	return (
		<>
			<h3>Event Object</h3>
			<div className="row">
				<div className="col">
					<form ref={formRef}>
						{/* First Name */}
						<div>
							<label htmlFor="first-name">First Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="firstName"
								id="first-name"
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

export default FormDataRef;
