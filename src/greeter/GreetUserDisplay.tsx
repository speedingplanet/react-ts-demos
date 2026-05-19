// Displays greeting from input from GreetUserInput

type Props = {
	userName: string;
};
export default function GreetUserDisplay({ userName }: Props) {
	return (
		<div
			style={{ border: '2px dotted orange' }}
			className="p-2"
		>
			Hello, {userName}
		</div>
	);
}
