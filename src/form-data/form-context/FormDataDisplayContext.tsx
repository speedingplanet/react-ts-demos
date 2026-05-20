import React, { useContext } from 'react';
import { FormStateContext } from './FormContext';

function FormDataDisplay() {
	const { firstName, lastName, city, state } = useContext(FormStateContext)!;

	return (
		<div>
			<p>Form data</p>
			<ul>
				<li>First Name: {firstName}</li>
				<li>Last Name: {lastName}</li>
				<li>City: {city}</li>
				<li>State: {state}</li>
			</ul>
		</div>
	);
}

export default FormDataDisplay;
