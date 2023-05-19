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
  height: 70vh;

  overflow-y: auto;

  /* display: flex;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'orders payment';

  .orders {
    grid-area: orders;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h4 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 45px;
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    }

    .scroll {
      overflow-y: auto;
      width: 80%;

      height: 50vh;
    }

    .foods {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 100px;
      }

      .infos {
        display: flex;
        gap: 5px;
        .quantity,
        .name {
          color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
          font-weight: 500;
          font-size: 2rem;
          font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
          line-height: 32px;
        }

        .value {
          display: inline-block;
          font-size: 1.2rem;
          line-height: 20px;
          font-weight: 400;

          color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};

          font-family: ${({ theme }) => theme.COLORS.FONT_TITLE};
        }
      }

      button {
        margin-top: 5px;
        color: ${({ theme }) => theme.COLORS.RED};
      }
    }

    h5 {
      font-weight: 500;
      font-size: 2rem;
      line-height: 45px;
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    }
  }

  .payments {
    grid-area: payment;

    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h4 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 45px;
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'orders'
      'payment';

    .orders {
      .scroll {
        width: 100%;
      }
    }
    .orders,
    .payments {
      align-items: center;
      margin: 0 auto;
    }
    .orders .scroll {
      width: 100%;
      padding: 20px;
    }
    .payments {
      margin-bottom: 50px;
    }
    .payments div {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    .orders {
      .scroll {
        overflow-y: auto;

        height: 60vh;
      }
      .foods {
        img {
          width: 70px;
        }
        .infos {
          .quantity,
          .name {
            font-size: 1.6rem;
          }

          .value {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`
