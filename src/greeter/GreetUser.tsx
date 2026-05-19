import { useState } from 'react';
import GreetUserDisplay from './GreetUserDisplay';
import GreetUserInput from './GreetUserInput';

const styleConfig = { border: '2px dodgerblue solid' };

export default function GreetUser() {
	// const [stateVariable, setter]
	const [userName, setUserName] = useState('');

	function handleButtonClick(draftUserName: string) {
		console.log(`About to greet ${draftUserName}`);
		setUserName(draftUserName);
	}

	return (
		<div
			style={styleConfig}
			className="p-1"
		>
			<GreetUserInput onButtonClick={handleButtonClick} />
			<GreetUserDisplay userName={userName} />
		</div>
	);
}
