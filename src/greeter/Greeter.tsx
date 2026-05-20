export interface Person {
	firstName: string;
	lastName: string;
	city: string;
	state: string;
}

interface GreeterProps {
	userName: string;
	// Question mark indicates an optional param
	// Same as
	// user: Person | undefined
	user?: Person;
}

/*
// Using props object
export default function Greeter(props: GreeterProps) {
	return <p>Greetings, {props.userName}!</p>;
}
*/

// Using destructured arguments
export default function Greeter({ userName }: GreeterProps) {
	return <p>Greetings, {userName}!</p>;
}

// export default Greeter;
