import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  max-height: 70px;

  .navbar {
    padding: 10px 10px;
    max-width: 1480px;
    min-height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    align-items: center;
    gap: 50px;
  }

  .menu {
    display: none;
  }
  .logo {
    margin: 0;
    grid-area: logo;

    gap: 1rem;

    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    line-height: 30px;

    svg {
      color: #065e7c;
    }
  }
  .new {
    grid-area: new;
    margin: 0;
  }

  .search {
    grid-area: search;
    width: 100%;
    display: flex;
    align-items: center;

    background-color: #0d1d25;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    input {
      padding: 0.5rem;
      width: 100%;

      background-color: transparent;
      border: none;

      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};

      :focus {
        outline: none;
      }
    }
  }
  .request {
    grid-area: request;

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .exit {
    grid-area: exit;
    margin: 0;
  }

  @media (max-width: 768px) {
    .menu {
      display: block;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
    }

    .nav-menu {
      position: fixed;
      top: -100%;
      gap: 0;
      display: flex;
      flex-direction: column;
      z-index: 1;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

      width: 100%;
      text-align: center;
      transition: 0.5s;
    }

    .nav-item {
      margin: 16px 0;
      width: 80%;
    }

    .nav-menu.active {
      top: 70px;
    }

    .new,
    .exit {
      margin: 0 auto;
    }
  }
`
