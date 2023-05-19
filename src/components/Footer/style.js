import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  padding: 10px;
  grid-area: footer;
`

export const Content = styled.div`
  max-width: 1280px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.COLOR_SUB_TEXT_GRAY};
      line-height: 30px;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
    font-size: 1.4rem;
    line-height: 14px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
