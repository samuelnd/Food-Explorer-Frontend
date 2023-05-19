import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 20rem;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 15px;
    gap: 15rem;
  }
  @media (max-width: 400px) {
    gap: 5rem;
  }
`
export const Content = styled.div`
  display: flex;
  gap: 1.9rem;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`
