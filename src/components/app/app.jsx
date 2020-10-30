import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Offer from "../offer/offer";


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route path="/offer/:id" exact component={Offer} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
