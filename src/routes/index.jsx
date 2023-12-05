import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/not-found/NotFound';

export default function Rotas() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}
