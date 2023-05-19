import styled from 'styled-components'

export const Container = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 16px;
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  .icon {
    align-self: flex-end;
    margin-right: 15px;
  }
  img {
    width: 200px;
  }

  .name {
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 32px;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }

  h4 {
    color: #82f3ff;
    font-size: 3.2rem;
    line-height: 50px;
    font-weight: 400;
  }

  .quantity {
    display: flex;
    gap: 20px;
    padding: 0rem 5rem;
    > div {
      display: flex;
      font-size: 3rem;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-weight: 700;

      > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      }
    }
  }
`
