import styled from "styled-components";

import { fadeInRight } from "../../styles/transitions";

import bgImage from "../../assets/background.jpg";

export const Container = styled.div`
  color: #fff;
  height: 100vh;
  
  max-width: 375px;
  margin: 0 auto;

  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  button {
    margin-top: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 45px 21px 68px 21px;

  background: rgba(0, 0, 0, 0.3);
`;

export const WelcomeContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  padding-bottom: 30px;
`;

export const WelcomeText = styled.h1`
  color: white;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: -0.02em;
  animation: ${fadeInRight} 0.5s linear;
`;
