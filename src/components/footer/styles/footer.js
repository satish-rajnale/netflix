import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #757575;
  margin-bottom: 40px;
`;
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
`;
export const Text = styled.div`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Break = styled.div`
  flex-basis: 100%;
  margin-top: 30px;
`;
