import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 70px;

  grid-template-areas:
    'header'
    'content'
    'footer';

  @media (max-width: 1024px) {
    grid-template-rows: 200px auto 70px;
  }
  @media (max-width: 400px) {
    grid-template-rows: auto auto 70px;
  }
`

export const Content = styled.div`
  grid-area: content;

  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 10px;

  h2 {
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
    margin: 20px 0 30px;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 45px;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }

  form {
    height: 50vh;
    padding: 10px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 50px;

    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }

  .wrapper {
    display: flex;
    gap: 30px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }
  .files {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 60%;

    font-size: 2rem;
    font-weight: 400;

    line-height: 16px;

    input[type='file'] {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 10px;

      border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
      border-radius: 5px;

      font-size: 1.4rem;
      font-weight: 500;
      line-height: 24px;

      :hover {
        color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      }
      cursor: pointer;
    }
  }
  .select {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 2rem;
    font-weight: 400;

    line-height: 16px;
    select {
      background: none;
      border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      border-radius: 5px;
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      padding: 10px 20px;
      width: 100%;
      font-size: 1.6rem;
    }
    option {
      font-size: 1.6rem;
      background-color: #192227;

      &:hover {
        background: white;
        color: black;
      }
    }
  }

  .inputs-box {
    width: 100%;
  }
  .ingredients {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 2rem;
    font-weight: 400;

    line-height: 16px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background: transparent;
    padding: 5px;

    border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
    border-radius: 5px;
  }

  .price {
    width: 30%;
  }

  .textarea {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 2rem;
  }
  textarea {
    width: 100%;
    height: 150px;
    resize: none;
    background: transparent;

    border-radius: 5px;

    padding: 5px;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }

  .add {
    align-self: flex-end;
    width: 30%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
    border-radius: 8px;
    line-height: 24px;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }

  @media (max-width: 1024px) {
    height: 60vh;
    padding: 10px;
    overflow-y: auto;
    form {
      height: auto;
      overflow-y: hidden;
    }

    .files {
      width: 100%;

      label {
        width: 100%;
      }
    }

    .select {
      width: 100%;
    }
    .tags {
      justify-content: center;
      gap: 20px;
      div {
        width: 40%;
      }
    }
    .price {
      width: 100%;
    }
    .add {
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    .wrapper {
      flex-direction: column;
    }
  }
`
