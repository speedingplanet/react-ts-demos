import { useState } from 'react';

function EventHandling() {
	/*
	const array = useState(0);

	// The value
	const counter = array[0];

	// The setter/mutator for changing the value
	const setCounter = array[1];

	const [value, setter] = useState(initialValue)
	*/
	const [counter, setCounter] = useState(10);
	const [yesNoValue, setYesNoValue] = useState('');
	const [message, setMessage] = useState('');

	function handleClick() {
		setMessage('You clicked on the button!');
	}

	return (
		<section>
			<header className="row">
				<div className="col">
					<h2>Event handling demo</h2>
				</div>
			</header>

			<div className="row mb-1">
				<div className="col-5">
					{/* button.btn.btn-primary */}
					Click on the button (assigned handler):&nbsp;
				</div>
				<div className="col">
					<button
						className="btn btn-primary"
						onClick={handleClick}
					>
						Click
					</button>
				</div>
			</div>
			<div className="row mb-1">
				<div className="col-5">
					{/* button.btn.btn-primary */}
					Click on the button (in-line handler):&nbsp;
				</div>
				<div className="col">
					<button
						className="btn btn-secondary"
						onClick={() => setMessage('You clicked on the in-line button')}
					>
						Click
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>Message: {message}</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<hr />
				</div>
			</div>
			<div className="row mb-1">
				<div className="col-5">Increment value</div>
				<div className="col">
					<button
						className="btn btn-warning"
						onClick={() => setCounter(counter + 1)}
					>
						Increment
					</button>
				</div>
				<div className="col">
					<p>Value: {counter}</p>
				</div>
			</div>
			<div className="row mb-1">
				<div className="col-5">Choose a value:</div>
				<div className="col">
					<div className="row">
						<div className="col">
							<input
								type="radio"
								name="flipper"
								id="yes"
								value="yes"
								onChange={(event) => {
									setYesNoValue(event.target.value);
								}}
								checked={yesNoValue === 'yes'}
							/>
							&nbsp;
							<label htmlFor="yes">Yes</label>
						</div>
						<div className="col">
							<input
								type="radio"
								name="flipper"
								id="no"
								value="no"
								onChange={(e) => setYesNoValue(e.target.value)}
								checked={yesNoValue === 'no'}
							/>
							&nbsp;
							<label htmlFor="no">No</label>
						</div>
					</div>
				</div>
				<div className="col">
					<p>You chose [{yesNoValue || 'Nothing yet'}]</p>
				</div>
			</div>
			<div className="row">
				<div className="col-5">Flip a state value</div>
				<div className="col">
					<button
						className="btn btn-danger"
						onClick={() => setYesNoValue('no')}
					>
						Flip value to 'No'
					</button>
				</div>
			</div>
		</section>
	);
}

export default EventHandling;
