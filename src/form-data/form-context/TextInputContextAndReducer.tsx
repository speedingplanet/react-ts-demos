import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import type { FormState } from './FormWithContext';
import { FormContext, FormDispatcherContext, FormStateContext } from './FormContext';

function TextInput({ id, name, children, ...props }: React.ComponentPropsWithoutRef<'input'>) {
	let dispatch = useContext(FormDispatcherContext)!;
	let state = useContext(FormStateContext)!;

	let labelText = children || 'Label goes here';
	if (!id) {
		id = nanoid();
	}

	return (
		<>
			<div>
				<label htmlFor={id}>{labelText}</label>
			</div>
			<div>
				<input
					type="text"
					id={id}
					name={name}
					value={state[name as keyof FormState]}
					onChange={(event) => {
						console.log('dispatching');
						dispatch({
							type: `change_${event.target.name}`,
							value: event.target.value,
						});
					}}
					{...props}
				/>
			</div>
		</>
	);
}

export default TextInput;
