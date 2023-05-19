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

  padding: 0 10px;
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;
  height: 60vh;

  overflow-y: auto;

  h2 {
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 44px;
    margin-bottom: 50px;
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }
  table,
  tr,
  td,
  th {
    border: 1px solid #192227;
  }

  table {
    border-spacing: 0;
    border-collapse: separate;
    border: 1px solid #192227;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    min-width: 680px;

    overflow-x: auto;
    margin-bottom: 10px;
  }

  th {
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    padding: 20px 30px;
    text-align: left;
    font-size: 1.6rem;
    font-weight: 700;
  }

  th:first-child {
    border-top-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
  }

  td {
    text-align: left;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};

    font-size: 2rem;
    line-height: 22px;
    font-weight: 400;
    line-height: 22px;
    padding: 20px 30px;
  }

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

  span {
    font-size: 1.6rem;
    line-height: 22px;
    font-weight: 400;
    line-height: 22px;
  }

  @media (max-width: 1000px) {
    th,
    td,
    select {
      padding: 10px;
    }
  }
`
