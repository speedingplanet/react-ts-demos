import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CancelRequest from './cancel-promise/CancelRequest';
import EffectHook from './effect-hook/EffectHook';
import ContextDemo from './context-demo/ContextDemo';
import DynamicComponents from './dynamic-components/DynamicComponents';
import VisibilityDemo from './visibility-tests/VisibilityDemo';

function App(): JSX.Element {
  return (
    <Router>
      <main className="container">
        <header className="row">
          <div className="col">
            <h1>React Demos for TypeScript</h1>
            <hr />
          </div>
        </header>
        <div className="row">
          <div className="col-3">
            <ul className="list-unstyled">
              <li>
                <Link to="dynamic-components">DynamicComponents</Link>
              </li>
              <li>
                <Link to="visibility-demo">Visbility Demo</Link>
              </li>
              <li>
                <Link to="cancel-promise">Cancel Requests</Link>
              </li>
              <li>
                <Link to="effect-hook">Effect Hook</Link>
              </li>
              <li>
                <Link to="context-demo">Context API</Link>
              </li>
              {/* 
              <li>
                <Link to="error-boundaries">Error Boundaries</Link>
              </li>
              <li>
                <Link to="higher-order-component">Higher Order Component</Link>
              </li>
              <li>
                <Link to="memoization">Memoization</Link>
              </li>
              <li>
                <Link to="redux-counter">Redux Counter</Link>
              </li>
              <li>
                <Link to="redux-counter-best-practices">
                  Redux Counter (best practices)
                </Link>
              </li>
              <li>
                <Link to="redux-toolkit-counter">Redux Counter (using the toolkit)</Link>
              </li>
               */}
            </ul>
          </div>
          <div className="col">
            <Switch>
              <Route path="/cancel-promise">
                <CancelRequest />
              </Route>
              <Route path="/effect-hook">
                <EffectHook />
              </Route>
              <Route path="/context-demo">
                <ContextDemo />
              </Route>
              <Route path="/dynamic-components">
                <DynamicComponents />
              </Route>
              <Route>
                <VisibilityDemo />
              </Route>
              {/* 
              <Route path="/error-boundaries">
                <ErrorBoundaryDemo />
              </Route>
              <Route path="/higher-order-component">
                <HigherOrderComponent />
              </Route>
              <Route path="/memoization">
                <Memoization />
              </Route>
              <Route path="/redux-counter">
                <ReduxCounter />
              </Route>
              <Route path="/redux-counter-best-practices">
                <ReduxCounterBP />
              </Route>
              <Route path="/redux-toolkit-counter">
                <ReduxToolkitCounter />
              </Route>
               */}
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
