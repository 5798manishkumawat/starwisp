import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page1 from "./components/Page1/Page1";
import Sidebar from "./components/Sidebar/Sidebar";
import Page2 from "./components/Page2/Page2";

function App() {
	return (
		<div className="App">
			<Router>
				<Sidebar />

				<Switch>
					<Route path="/page2">
						<Page2 />
					</Route>
					<Route path="/">
						<Page1 />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
