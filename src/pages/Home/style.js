import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
`

export const Content = styled.div`
  grid-area: content;

  padding: 130px 10px 0;
  margin: 30px auto;

  width: 100%;
  max-width: 1280px;
  height: 75vh;

  overflow-y: auto;

  .banner {
    position: relative;
    width: 100%;
    height: 260px;

    padding: 50px;

    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    border-radius: 8px;

    display: flex;

    justify-content: flex-end;
    align-items: center;

    img {
      width: 600px;
      position: absolute;
      left: -50px;
      bottom: 0;
    }

    .text-banner {
      color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
      font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};

      h2 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
      }

      p {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 50px 30px 0;

    .banner {
      height: 200px;
      img {
        width: 400px;
        left: -40px;
      }

      .text-banner {
        width: 50%;
        h2 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (max-width: 400px) {
    height: 60vh;
    padding: 30px 15px 0;

    .banner {
      height: 130px;
      img {
        width: 250px;
        left: 50px;
      }
      .text-banner {
        position: absolute;
        top: 10px;
        left: 5px;
        right: 0;
        width: 100%;
        h2 {
          font-size: 3.5rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .banner {
      .text-banner {
        top: -10px;
      }
    }
  }
`
