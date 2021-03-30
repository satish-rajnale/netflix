



import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import {JumbotronContainer} from '../containers/jumbotron';
import { OptForm } from '../components';
import { Feature } from '../components';
export default function Home(){
    return(
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
            </Feature>
            <OptForm> 
                <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
                <OptForm.Input placeholder="Email Address"/>
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
        </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
       
        </>
    )
}