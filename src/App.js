import { Routes, Route } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import { useAuthListener } from "./hooks";
import React from 'react'

export default function App() {
  const user = useAuthListener();

  return (
    <Routes>
      <Route
        path={ROUTES.SIGN_IN}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <SignIn />
          </IsUserRedirect>
        }
      />
      <Route
        path={ROUTES.SIGN_UP}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <SignUp />
          </IsUserRedirect>
        }
      />
      <Route
        path={ROUTES.BROWSE}
        element={
          <ProtectedRoute user={user}>
            <Browse />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.HOME}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <Home />
          </IsUserRedirect>
        }
      />
    </Routes>
  );
}
