import { Navigate, useLocation } from "react-router-dom";
import React from 'react'

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (user.user == null) {
    return children;
  } else if (user) {
    return <Navigate to={loggedInPath} replace />;
  }
  return null;
}

export function ProtectedRoute({ user, children }) {
  const location = useLocation();
  
  if (user.user == null) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else if (user) {
    return children;
  }
  return null;
}
