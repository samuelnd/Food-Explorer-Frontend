import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #192227;
  border-radius: 8px;

  .pay {
    display: flex;
    > button {
      margin: 0;
      width: 100%;
      padding: 10px 30px;

      border-bottom: 1px solid #192227;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 16px;

      justify-content: center;

      overflow: hidden;
      :hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    button:first-child {
      border-right: 1px solid #192227;
      border-top-left-radius: 8px;
    }

    button:last-child {
      border-top-right-radius: 8px;
    }

    .active {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`
export const Image = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .status-order {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;

    h3 {
      font-weight: 400;
      line-height: 24px;
      font-size: 2.4rem;

      color: #c4c4cc;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      p {
        text-align: center;
        font-weight: 400;
        line-height: 24px;
        font-size: 2rem;

        color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
      }
    }
  }

  @media (max-width: 400px) {
    .status-order {
      h3 {
        font-size: 2rem;
      }
      > div {
        p {
          font-size: 1.6rem;
        }
      }
    }
  }
`
