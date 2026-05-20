import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import type { FormState } from './FormWithContext';
import { FormContext } from './FormContext';

function TextInput({ id, name, children, ...props }: React.ComponentPropsWithoutRef<'input'>) {
	let context = useContext(FormContext);

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
					value={context?.state ? context.state[name as keyof FormState] : undefined}
					onChange={(event) => {
						context?.updater(event.target.name, event.target.value);
					}}
					{...props}
				/>
			</div>
		</>
	);
}

export default TextInput;
