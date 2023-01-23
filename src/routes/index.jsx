import { Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import indexHome from "../components/home/indexHome";
import indexLogin from "../components/login/indexLogin";
import NotFound from "../components/not-found/NotFound";

export default function Rotas() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <Switch>
      <Route exact path="/" component={indexLogin} />
      <PrivateRoute exact path="/home" component={indexHome} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}
