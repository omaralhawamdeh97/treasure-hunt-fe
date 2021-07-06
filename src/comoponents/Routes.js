import { Route, Switch } from "react-router";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Treasures from "./Treasures";

const Routes = () => {
  return (
    <Switch>
      <Route path="/treasures">
        <Treasures />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
