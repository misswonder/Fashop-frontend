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
import OrderHistory from "./components/OrderHistory";
// import Search from "./components/Search";
import MyCart from "./components/MyCart";
import Logout from "./components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback} from "react";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Image src={logo} size="medium" centered />
        <TopNav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/profile"
            render={() => {
              return user ? <Profile /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/orderhistory"
            render={() => {
              return user ? <OrderHistory /> : <Redirect to="/login" />;
            }}
          />
          {/* <Route
            exact
            path="/search"
            render={() => {
              return user ? <Search /> : <Redirect to="/login" />;
            }}
          /> */}
          <Route
            exact
            path="/mycart"
            render={() => {
              return user ? <MyCart /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/login"
            render={(routeProps) => <LoginForm {...routeProps} />}
          />
          <Route
            exact
            path="/logout"
            render={(routeProps) => <Logout {...routeProps} logout={logout} />}
          />
          <Route
            path="/"
            render={() => <Redirect to={user ? "/home" : "/login"} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
