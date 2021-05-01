import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import React from 'react'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="NETFLIX" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
