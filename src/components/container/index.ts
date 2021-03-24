import styled from 'styled-components';

export const Container = styled.div`
  width: 100rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.6rem 3.2rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.XX_SMALL}) {
    padding: 1.6rem;
  }
`;
