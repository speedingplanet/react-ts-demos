// Contains the label, the form field, and the button

interface Props {
	onButtonClick: (draftUserName: string) => void;
}
export default function GreetUserInput({ onButtonClick }: Props) {
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
					/>
				</div>
				<div className="col">
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => onButtonClick('test username')}
					>
						Say Hello!
					</button>
				</div>
			</div>
		</div>
	);
}
