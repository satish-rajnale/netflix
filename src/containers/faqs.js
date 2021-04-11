
import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm} from '../components';

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Item> {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
          </Accordion.Item>

          <OptForm>
             
              <OptForm.Text>
              Ready to watch? Enter your email to create or restart your membership.
              </OptForm.Text>
              <OptForm.Input placeholder="Email Address"/>
              <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Accordion>
    )
}