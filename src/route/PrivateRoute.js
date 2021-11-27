import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute(props) {
    const { children, ...rest } = props;
    const {AllContexts} = useAuth();
    const {user, loading} = AllContexts;
    
    if(loading){
      return(
        <div className="text-center text-danger p-3"><Spinner animation="border" variant="primary" /></div>
      )
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute;