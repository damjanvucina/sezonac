import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/authorization/Register";
import Login from "./components/authorization/Login";
import PublishAd from "./components/ads/PublishAd";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  if (decoded.exp < Date.now() / 1000) {
    store.dispatch(logoutUser());

    window.location.href = "/prijava";
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path={["/", "/naslovnica"]} component={Landing} />
          {/*<Route exact path="/" component={Landing} />*/}
          <Route exact path="/registracija" component={Register} />
          <Route exact path="/prijava" component={Login} />
          <Route exact path="/oglasi/novi" component={PublishAd} />

          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
