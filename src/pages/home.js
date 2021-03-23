
import { Header } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import {JumbotronContainer} from '../containers/jumbotron';

export default function Home(){
    return(
        <>
        <Header>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </Header>
        </>
    )
}