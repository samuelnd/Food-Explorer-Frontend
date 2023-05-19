import styled from 'styled-components'

export const Container = styled.form`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  width: 100%;
  max-width: 47.6rem;
  align-self: center;

  padding: 6.4rem;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  h1 {
    text-align: center;
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }
`
