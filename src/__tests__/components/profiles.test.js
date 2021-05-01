import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles/>", () => {
  it("renders <Profiles/> with data", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture src="/images/karl.png" data-testid="profile-picture" />
            <Profiles.Name>Satish Rajnale</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's Watching?")).toBeTruthy();
    expect(getByText("Satish Rajnale")).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    
    expect(container.firstChild).toMatchSnapshot();
     
  });
  it("renders <Profiles/> with data and misc when no img src provided", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture  data-testid="profile-picture-misc" />
            <Profiles.Name>Satish Rajnale</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's Watching?")).toBeTruthy();
    expect(getByText("Satish Rajnale")).toBeTruthy();
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    
    expect(container.firstChild).toMatchSnapshot();
    
  });
});
