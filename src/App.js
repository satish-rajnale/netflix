
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import * as ROUTES from './constants/routes';
import {Home, Browse, SignIn, SignUp} from './pages';

export default function App() {
  return (
   <Router>
     <Route path={ROUTES.HOME} exact>
       <Home/>
     </Route>
     <Route path={ROUTES.SIGN_IN} >
        <SignIn/>
     </Route>
     <Route path={ROUTES.BROWSE} >
        <Browse/>
     </Route>
     <Route path={ROUTES.SIGN_UP} >
        <SignUp/>
     </Route>
   </Router> 
  );
}

