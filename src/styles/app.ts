import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #000;

  // padding: 2rem;

  overflow: hidden !important;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1024px;
  height: 100vh;

  background: linear-gradient(black, #f19668); //f19668

  overflow: hidden !important;

  @media (min-width: 1024px) {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 1) 150%
      ),
      url("/images/background.png");
    background-size: cover;
  }
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
  flex-direction: column;

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
      margin: 1rem 0 2rem;
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      width: 100%;
      height: fit-content;

      button {
        width: 135px;
        height: 56px;
      }
    }
  }

  .right_content {
    img {
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translateX(50%);

      max-width: 120vw;
      width: auto;
      max-height: 666px;
      height: auto;
    }

    @media (min-width: 1024px) {
      display: none;
  }
`;
