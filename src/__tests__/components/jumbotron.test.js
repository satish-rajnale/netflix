import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Jumbotron } from "../../components";
import JumboData from "../../fixtures/jumbo.json";

describe("<Jumbotron/>", () => {
  it("renders the <Jumbotron/> with data", () => {
    const { container, getByText, getByTestId, getByAltText } = render(
      <Jumbotron.Container>
        {JumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} data-testid = {`${item.id}-jumbo-image`} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );

    expect(getByText("Enjoy on your TV.")).toBeTruthy();
    expect(getByAltText("Tiger King on Netflix")).toBeTruthy();
    expect(getByTestId("1-jumbo-image")).toBeTruthy();
    expect(getByText("Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.")).toBeTruthy();
  
    expect(container.firstChild).toMatchSnapshot();
});
});
