import { LockBody, Spinner, Picture, ReleaseBody } from "./styles/loading";
import React from 'react';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps }>
      <LockBody />
      <Picture src={`/images/users/${src}.png`}  data-testid="loading-picture"/>
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleasebody() {
  return <ReleaseBody />;
};
