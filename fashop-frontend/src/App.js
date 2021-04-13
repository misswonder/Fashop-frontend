import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Image } from "semantic-ui-react";
import LoginForm from "./components/LoginForm";
// import SignupForm from "./components/SignupForm";
import logo from "./image/logo.png";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Filters from "./components/Filters";
import OrderHistory from "./components/OrderHistory";
import MyCart from "./components/MyCart";
import Logout from "./components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
// import "semantic-ui-css/semantic.min.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect } from "react";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const login = useCallback(
    (payload) => {
      dispatch({ type: "LOGIN", payload });
    },
    [dispatch]
  );
  const logout = useCallback(() => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      login(JSON.parse(userFromStorage));
    }
  }, []);

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
              return localStorage.getItem("user") ? <Profile /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/filters"
            render={() => {
              return localStorage.getItem("user") ? <Filters /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/orderhistory"
            render={() => {
              return localStorage.getItem("user") ? <OrderHistory /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/mycart"
            render={() => {
              return localStorage.getItem("user") ? <MyCart /> : <Redirect to="/login" />;
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

// const mapStateToProps = (state) => {
//   return {
//     isLogin: state.user.isLogin,
//     isSignup: state.user.isSignup
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     user: () => dispatch({ type: "LOGIN", isLogin: true }),
//     user: () => dispatch({ type: "SIGNUP", isSignup: true })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
