import { BrowserRouter, Routes, Route, Link } from 'react-router';
import VisibilityDemo from './visibility-tests/VisibilityDemo';
import Home from './Home';
import Greeter, { type Person } from './greeter/Greeter';
import GreetUser from './greeter/GreetUser';

let person: Person = {
	firstName: 'John',
	lastName: 'Paxton',
	city: 'Nutley',
	state: 'NJ',
};

let { firstName } = person;

function App() {
	return (
		<main className="container">
			<header className="row">
				<div className="col">
					<h1>React Demos</h1>
					<hr />
				</div>
			</header>
			{/* <Greeter userName="John" /> */}
			<Greeter userName={firstName} />
			<BrowserRouter>
				<div className="row">
					<div className="col-3">
						<ul className="list-unstyled">
							<li>
								<Link to="visibility-demo">Visbility Demo</Link>
							</li>
							<li>
								<Link to="greet-user">Greet User</Link>
							</li>
						</ul>
					</div>
					<div className="col">
						<Routes>
							<Route
								index
								element={<Home />}
							/>
							<Route
								path="visibility-demo"
								element={<VisibilityDemo />}
							/>
							<Route
								path="greet-user"
								element={<GreetUser />}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
