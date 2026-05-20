/*
Properties interfaces are usually either `Props` and private 
or [Component Name]Props if they need to be exported
*/
interface PropsChildProps {
	firstName: string;
	lastName: string;
}

/*
Attributes passed to the component in JSX (like firstName and lastName), 
land at the function as an object literal:
{
	firstName: 'John',
	lastName: 'Smith'
}

Below, we use object destructuring to break the object literal into two arguments
*/
export default function PropsChild({ firstName, lastName }: PropsChildProps) {
	return (
		<p>
			Hello, {firstName} {lastName}
		</p>
	);
}
