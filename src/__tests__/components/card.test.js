import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Card, Player } from "../../components";
 
const category = "series";

const slideRows = [
  {
    title: "Documentaries",
    data: [
      {
        title: "Tiger King",
    description:
      "Tiger King description",
    genre: "documentaries",
    maturity: "18",
    slug: "tiger-king",
    id: "2fc20b4c-5877-4de1-8782-1fe3a0a826a4",
    docId: "wbIZxQNif6X9yGoiHgcj"
      },
    ],
  },
  {
    title: "Feel Good",
    data: [
      {
        title: "Juno",
    description:
      "Juno description",
    genre: "feel-good",
    maturity: "12",
    slug: "juno",
    id: "e4f94668-2b91-4fdb-8c6b-bede8c143280",
    docId: "UIJFp7ORsveL1RVEkJBn",
      },
    ],
  },
];


describe("<Card/>", ()=>{
    afterEach(cleanup)
    it("renders the <Card/> with data", () => {
        const {container, getByText} = render( <Card.Group>
            {slideRows.map((slideItem) => (
              <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                <Card.Title>{slideItem.title}</Card.Title>
    
                <Card.Entities>
                  {slideItem.data.map((item) => (
                    <Card.Item key={item.docId} item={item}>
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video src="/videos/bunny.mp4" />
                  </Player>
                </Card.Feature>
              </Card>
            ))}
          </Card.Group>);

          expect(getByText("Documentaries")).toBeTruthy();
          expect(getByText("Tiger King")).toBeTruthy();
          expect(getByText("Tiger King description")).toBeTruthy();
          expect(getByText("Feel Good")).toBeTruthy();
          expect(getByText("Juno")).toBeTruthy();
          expect(getByText("Juno description")).toBeTruthy();
    
        expect(container.firstChild).toMatchSnapshot();
        });

        it("renders the <Card/> on click with data", () => {
            const {container, queryByText, getByTestId, getByAltText} = render( <Card.Group>
                {slideRows.map((slideItem) => (
                  <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
        
                    <Card.Entities>
                      {slideItem.data.map((item) => (
                        <Card.Item key={item.docId} item={item} data-testid={`${item.slug}-item-feature`}>
                          <Card.Image
                            src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                          />
                          <Card.Meta>
                            <Card.SubTitle>{item.title}</Card.SubTitle>
                            <Card.Text>{item.description}</Card.Text>
                          </Card.Meta>
                        </Card.Item>
                      ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                      <Player>
                        <Player.Button />
                        <Player.Video src="/videos/bunny.mp4" />
                      </Player>
                    </Card.Feature>
                  </Card>
                ))} 
              </Card.Group>);
    
              expect(queryByText("18")).toBeFalsy();
             fireEvent.click(getByTestId("tiger-king-item-feature"));
             expect(queryByText("18")).toBeTruthy();
            
             fireEvent.click(getByAltText("close"));
             expect(queryByText("18")).toBeFalsy();
             
             expect(queryByText("PG")).toBeFalsy();
             fireEvent.click(getByTestId("tiger-king-item-feature"));
             expect(queryByText("PG")).toBeFalsy();

            //  fireEvent.click(getByAltText("close"));
            //  expect(queryByText("PG")).toBeFalsy();


            expect(container.firstChild).toMatchSnapshot();
            })
})