import PropsChild from './PropsChild';

function PropsParent() {
	return (
		<div>
			<p>Passing the name "John Smith" from a parent component to a child component.</p>
			<div>
				<PropsChild
					firstName="John"
					lastName="Smith"
				/>
			</div>
		</div>
	);
}

export default PropsParent;
