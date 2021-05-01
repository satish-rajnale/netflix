import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature/>", () => {
    it("renders the <Feature/> with data", () => {
        const { container, getByText} = render(
            <Feature>
                <Feature.Title>
                    Unlimited Films, TV programmes & more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at anytime.
                </Feature.SubTitle>
            </Feature>
        );


        expect(getByText("Unlimited Films, TV programmes & more.")).toBeTruthy();
        expect(getByText("Watch anywhere. Cancel at anytime.")).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });


    it("renders the <Feature/> only title", () => {
        const { container, getByText, queryByText} = render(
            <Feature>
                <Feature.Title>
                    Unlimited Films, TV programmes & more.
                </Feature.Title>
            </Feature>
        );


        expect(getByText("Unlimited Films, TV programmes & more.")).toBeTruthy();
        expect(queryByText("Watch anywhere. Cancel at anytime.")).toBeFalsy();

        expect(container.firstChild).toMatchSnapshot();
    })
})