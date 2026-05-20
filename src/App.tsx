import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import VisibilityDemo from './visibility-tests/VisibilityDemo';
import Home from './Home';
import Greeter, { type Person } from './greeter/Greeter';
import GreetUser from './greeter/GreetUser';
import './App.css';
import PropsParent from './props-component/PropsParent';
import EventHandling from './event-handling/EventHandling';
import ConditionalDisplay from './conditional-display/ConditionalDisplay';
import FormDataManager from './form-data/FormDataManager';
import TodosManager from './todos/TodosManager';
import IterativeContentManager from './iterative-content/IterativeContentManager';
import RoutingManager from './routing/RoutingManager';
import AsyncManager from './async-demos/AsyncManager';
import PropsChildren from './PropsChildren';

// For Greeter
let person: Person = {
	firstName: 'John',
	lastName: 'Paxton',
	city: 'Nutley',
	state: 'NJ',
};

let { firstName } = person;

function App() {
	return (
		<main className="container-fluid">
			<header className="row">
				<div className="col">
					<h1>React Demos</h1>
					<hr />
				</div>
			</header>
			<BrowserRouter>
				<div className="row">
					<div className="col-3">
						<ul className="list-unstyled">
							<li>
								<NavLink to="greeter-demo">Greeter Demo</NavLink>
							</li>
							<li>
								<NavLink to="greet-user">Greet User</NavLink>
							</li>
							<li>
								<NavLink to="props-component">Props Component</NavLink>
							</li>
							<li>
								<NavLink to="event-handling">Event Handling</NavLink>
							</li>
							<li>
								<NavLink to="conditional-display">Conditional Display</NavLink>
							</li>
							<li>
								<NavLink to="visibility-demo">Visbility Demo</NavLink>
							</li>
							<li>
								<NavLink to="form-data">Form Data examples</NavLink>
							</li>
							<li>
								<NavLink to="iterative-content">Iterative content</NavLink>
							</li>
							<li>
								<NavLink to="routing">Routing</NavLink>
							</li>
							<li>
								<NavLink to="async-demos">Async Demos</NavLink>
							</li>
							<li>
								<NavLink to="props-children">
									<code>children</code> property
								</NavLink>
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
								path="greeter-demo"
								element={<Greeter userName={firstName} />}
							/>
							<Route
								path="greet-user"
								element={<GreetUser />}
							/>
							<Route
								path="props-component"
								element={<PropsParent />}
							/>
							<Route
								path="event-handling"
								element={<EventHandling />}
							/>
							<Route
								path="conditional-display"
								element={<ConditionalDisplay />}
							/>
							<Route
								path="visibility-demo"
								element={<VisibilityDemo />}
							/>
							<Route
								path="form-data/*"
								element={<FormDataManager />}
							/>
							<Route
								path="todos/*"
								element={<TodosManager />}
							/>
							<Route
								path="iterative-content/*"
								element={<IterativeContentManager />}
							/>
							<Route
								path="/routing/*"
								element={<RoutingManager />}
							/>
							<Route
								path="async-demos/*"
								element={<AsyncManager />}
							/>
							<Route
								path="props-children"
								element={<PropsChildren />}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
