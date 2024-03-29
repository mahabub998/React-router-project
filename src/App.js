import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Component/About/About";
import Details from "./Component/Details/Details";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
        <About></About>
          </Route>
          {/* <Route path="/users/:id">
           <Home></Home>
          </Route> */}
           <Route path="/post/:idTeam">
         <Details></Details>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
         
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
