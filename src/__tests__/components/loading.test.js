import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading/>", () => {
  it("renders <Loading/> with data", () => {
    const { container, getByTestId } = render( <Loading src="/images/karl.png" data-testid="loading" />);

    expect(getByTestId("loading")).toBeTruthy();
    expect(getByTestId("loading-picture")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();

  });

  it("renders <Loading.ReleaseBody/> correctly", () => {
    const { container} = render( <Loading.ReleaseBody  />);

    expect(container.firstChild).toMatchSnapshot();

  });

})