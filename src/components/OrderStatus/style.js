import styled from 'styled-components'

export const Container = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 22px;

  color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
`
