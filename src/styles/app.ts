import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh !important;

  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) -120%,
      rgba(0, 0, 0, 0.8) 0%
    ),
    url("/images/background.png");
  background-size: cover;

  // padding: 2rem;

  overflow: hidden !important;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1024px;
  height: 100vh !important;

  background: linear-gradient(black, #f19668); //f19668

  @media (min-width: 768px) {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) -120%,
        rgba(0, 0, 0, 0.8) 0%
      ),
      url("/images/background.png");
    background-size: cover;
  }

  overflow: hidden !important;
`;

export const Header = styled.div`
  display: flex;
  aling-items: center;

  width: 100%;
  height: 100px;

  background-color: inherit;

  padding: 1rem;

  img {
    width: 80px;
    margin-right: 20px;
  }

  a {
    color: #fff;
    font-size: 1.1rem;
    font-family: "Mukta", sans-serif;
    margin: auto 0;

    margin-right: 1rem;
  }
`;

export const Main = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;

  overflow: hidden;

  color: #fff;

  .left_content {
    display: flex;
    flex-direction: column;

    padding: 1rem;
    margin-top: 1.5rem;

    z-index: 1;

    img {
      max-width: 280px;
      width: auto;
      max-height: 100px;
      height: auto;
    }

    p {
      font-size: 1.2rem;
      width: 80%;
      max-width: 280px;
      margin: 1rem 0 2rem;
      line-height: 1.2;
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      width: 100%;
      height: fit-content;

      button {
        width: 135px;
        height: 56px;
        color: #fff;
        font-size: 1.1rem;
        font-weight: bold;
      }

      .play_now {
        transform: skewX(-10deg);
        background: linear-gradient(orange, #f19668);
        border: none;

        &:hover {
          background: linear-gradient(#f19668, black);
        }

        @media (min-width: 768px) {
          background: linear-gradient(red, #f19668);
        }
      }

      .login {
        border: 2px solid #fff;
        background-color: inherit;

        :hover {
          background-color: orange;
        }
      }

      @media (min-width: 500px) {
        width: fit-content;
        gap: 1rem;
      }
    }
  }

  .right_content {
    display: flex;
    aling-items: center;
    justify-content: center;

    // background-color: red;

    width: 100vw;

    img {
      position: fixed;
      bottom: 0;

      max-width: 130%;
      width: auto;
      max-height: 30rem;
      height: auto;
    }

    @media (min-width: 768px) {
      img {
        // display: none;
        position: inherit;
        margin-left: 110px;
        margin-top: 250px;
      }
    }
  }
`;
