// Contains the label, the form field, and the button

import { useState } from 'react';

interface Props {
	onButtonClick: (draftUserName: string) => void;
}
export default function GreetUserInput({ onButtonClick }: Props) {
	const [draftUserName, setDraftUserName] = useState('');

	return (
		<div
			style={{ border: '2px dashed magenta' }}
			className="mb-2 p-2"
		>
			<div className="row">
				<div className="col-auto">
					<label
						htmlFor="person-name"
						className="col-form-label"
					>
						Please enter your name:
					</label>
				</div>
				<div className="col-auto">
					<input
						type="text"
						name="personName"
						id="person-name"
						className="form-control"
						value={draftUserName}
						onChange={(event) => setDraftUserName(event.target.value)}
					/>
				</div>
				<div className="col">
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => onButtonClick(draftUserName)}
					>
						Say Hello!
					</button>
				</div>
			</div>
		</div>
	);
}
