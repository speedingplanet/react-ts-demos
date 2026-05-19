import { BrowserRouter, Routes, Route, Link } from 'react-router';
import VisibilityDemo from './visibility-tests/VisibilityDemo';
import Home from './Home';

function App() {
	return (
		<main className="container">
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
								<Link to="visibility-demo">Visbility Demo</Link>
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
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
