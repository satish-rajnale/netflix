import { LockBody, Spinner, Picture, ReleaseBody } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleasebody() {
  return <ReleaseBody />;
};
