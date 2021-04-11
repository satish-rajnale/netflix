
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Call 000-800-040-1843</Footer.Title>
            <Footer.Break/>
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
                <Footer.Link  href="#">Ways To Watch</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix India</Footer.Text>
        </Footer>
    )
}