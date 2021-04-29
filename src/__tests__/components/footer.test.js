import React from 'react';
import { render, fireEvent, cleanup} from  "@testing-library/react";
import {Footer} from '../../components';


describe("<Footer/>", ()=> {
    afterEach(cleanup)
    it("renders the <Footer/> with data", ()=> {
        const {container, getByText, getAllByText}  = render(<Footer>
            <Footer.Title>Questions? Call 000-800-040-1843</Footer.Title>
            <Footer.Break />
            <Footer.Row>
              <Footer.Column>
                <Footer.Link href="#">FAQ</Footer.Link>
                <Footer.Link href="#">Investor Relations</Footer.Link>
                <Footer.Link href="#">Ways To Watch</Footer.Link>
                <Footer.Link href="#">Media Center</Footer.Link>
              </Footer.Column>
      
              <Footer.Column>
                <Footer.Link href="#">Help Centre</Footer.Link>
                <Footer.Link href="#">Investor Relations</Footer.Link>
                <Footer.Link href="#">Terms Of Use</Footer.Link>
                <Footer.Link href="#">Corporate Information</Footer.Link>
              </Footer.Column>
      
              <Footer.Column>
                <Footer.Link href="#">Account</Footer.Link>
                <Footer.Link href="#">Jobs</Footer.Link>
                <Footer.Link href="#">Privacy</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.Column>
      
              <Footer.Column>
                <Footer.Link href="#">Cookie Preferences</Footer.Link>
                <Footer.Link href="#">Netflix Originals</Footer.Link>
                <Footer.Link href="#">Legal Notices</Footer.Link>
                <Footer.Link href="#">Ways To Watch</Footer.Link>
              </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix India</Footer.Text>
          </Footer>);


    expect(getByText("Questions? Call 000-800-040-1843")).toBeTruthy();
    expect(getByText("FAQ")).toBeTruthy();
    expect(getAllByText("Investor Relations")).toBeTruthy();
    expect(getAllByText("Ways To Watch")).toBeTruthy();
    expect(getByText("Media Center")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();


    })
})