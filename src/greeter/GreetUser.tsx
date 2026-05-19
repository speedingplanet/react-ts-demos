import GreetUserDisplay from './GreetUserDisplay';
import GreetUserInput from './GreetUserInput';

const styleConfig = { border: '2px dodgerblue solid' };

export default function GreetUser() {
	return (
		<div
			style={styleConfig}
			className="p-1"
		>
			<GreetUserInput />
			<GreetUserDisplay />
		</div>
	);
}
