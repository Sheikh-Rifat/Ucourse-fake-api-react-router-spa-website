import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Subscription from "./components/Subscription/Subscription";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* route for hone page */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          {/* route for services page */}
          <Route path="/services">
            <Services></Services>
          </Route>

          {/* route for subscription page */}
          <Route path="/subscription">
            <Subscription></Subscription>
          </Route>

          {/* route for about page */}
          <Route path="/about">
            <About></About>
          </Route>

          {/* route for contact page */}
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          {/* route for pages not found */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
