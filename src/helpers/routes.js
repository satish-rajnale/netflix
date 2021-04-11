import { Route, Redirect} from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest}){
    return (
        <Route
            {...rest}
            render={() => {
                if(user.user == null){
                   
                    return children;
                }
                else if(user){
                    

                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                            />
                    )
                }
                return null;
            }}
            />
    )
}

export function ProtectedRoute({ user, children, ...rest}){
    return(
        <Route
            {...rest}
            render={({location}) => {
               
                 if(user.user == null){
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from : location}
                            }}
                        />
                      )
                }
               else if(user){
                    return children;
                }
                return null;
            }}
            />
    )
}