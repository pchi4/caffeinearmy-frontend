import { Switch, Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../services/auth';
import  HomeComponent from '../components/home/HomeComponent';
import  LoginComponent from '../components/login/LoginComponent';
import  NotFound from '../components/not-found/NotFound';

export default function Rotas() {

  const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
      {...rest}
      render ={props =>
        isAuthenticated() ? (
          <Component {...props}/> 
        ) : (
          <Redirect to={{pathname: '/', state: { from: props.location },}}/>
        )
      }
    />
  );
    
  return (
    <Switch>
      <Route exact path='/' component={LoginComponent} />
      <PrivateRoute exact path='/home' component={HomeComponent}/>
      <Route exact path='*' component={NotFound}/>
    </Switch>
  );
}
