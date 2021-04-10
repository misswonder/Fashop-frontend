import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Image } from "semantic-ui-react";
import LoginForm from "./components/LoginForm";
import logo from "./image/logo.png";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Filters from "./components/Filters";
import OrderHistory from "./components/OrderHistory";
import Logout from "./components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { connect } from 'react-redux';


const App = (isLogin) => {

  return (
    <Router>
      <div className="App">
        <Image src={logo} size="small" centered />
        <TopNav />
        <Switch>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route
            exact
            path="/filters"
            render={() => {return isLogin ? <Filters/> : <Redirect to= '/' />}}
          />
          <Route
            exact
            path="/OrderHistory"
            render={() => {return isLogin ? <OrderHistory /> : <Redirect to= '/' />}}
          /> */}
          <Route
            exact
            path="/logout"
            render={() => (
              <Logout />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(App);
