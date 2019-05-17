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
import JobCategory from "./components/ads/JobCategory";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { setCurrentAds, setSearchBarOption } from "./actions/adActions";
import {
  searchBarOptionToActionType,
  searchBarOptions
} from "./utils/searchBarOptionToActionType";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  if (decoded.exp < Date.now() / 1000) {
    store.dispatch(logoutUser());

    window.location.href = "/prijava";
  }
}

// if (localStorage.category) {
//   store.dispatch(
//     setSearchBarOption(
//       searchBarOptionToActionType("category"),
//       localStorage.category
//     )
//   );
// }

for (let option of searchBarOptions) {
  if (localStorage[option]) {
    console.log(
      "nakon reloada stavi " + option + " na " + localStorage[option]
    );
    store.dispatch(
      setSearchBarOption(
        searchBarOptionToActionType(option),
        localStorage[option]
      )
    );
  }
}

if (localStorage.ads) {
  store.dispatch(setCurrentAds(JSON.parse(localStorage.ads)));
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          {/*<Route exact path={["/", "/naslovnica"]} component={Landing} />*/}
          <Route exact path="/" component={Landing} />
          <Route exact path="/registracija" component={Register} />
          <Route exact path="/prijava" component={Login} />
          <Route exact path="/oglasi/novi" component={PublishAd} />
          <Route exact path="/oglasi" component={JobCategory} />

          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
