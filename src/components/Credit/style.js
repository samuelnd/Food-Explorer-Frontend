import styled from 'styled-components'

export const Container = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: 3rem;
  color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};

  .creditCardNumber {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
  input {
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
    font-size: 1.6rem;
  }

  button {
    justify-content: center;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`

export const OtherInformation = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
