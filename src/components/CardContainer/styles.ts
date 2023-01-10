import styled from 'styled-components'

interface CardProps {
  total?: boolean;
}

export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#C9833E' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  &:hover{
    box-shadow: ${({ total }: CardProps): string => (total ? 
      '-webkit-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.5); -moz-box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.5); box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.5);' :
       'initial')};
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 16px;
    }
  }
  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;
