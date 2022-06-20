import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% { transform: translateX(20px); opacity: 0; }
100% { transform: translateX(0); opacity: 1;}
`;

interface LogoStyleProps {
  wd: string;
  ht?: string;
}

export const Container = styled.img<LogoStyleProps>`
width: ${(props) => (props.wd)};
height: ${(props) => (props.ht)};
animation: ${fadeIn} 0.5s linear;
`