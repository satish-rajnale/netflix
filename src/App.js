
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';
import * as ROUTES from './constants/routes';
import {Home, Browse, SignIn, SignUp} from './pages';
import { useAuthListener} from './hooks';

export default function App() {
  const user = useAuthListener();

  return (
   <Router>
     <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}>
            <SignIn/>
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}>
            <SignUp/>
        </IsUserRedirect>
       <ProtectedRoute user={user} path={ROUTES.BROWSE} >
          <Browse/>
       </ProtectedRoute>
    
         <ProtectedRoute user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
           <Home/>
        </ProtectedRoute>

{/* <Route path={ROUTES.HOME} exact>
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
     </Route> */}
      </Switch>
   </Router> 
  );
}

