import { keyframes } from 'styled-components';

export const fadeInRight = keyframes`
0% { transform: translateX(20px); opacity: 0; },
100% { transform: translateX(0); opacity: 1;}
`;

export const fadeInLeft = keyframes`
0% { transform: translateX(-20px); opacity: 0; },
100% { transform: translateX(0); opacity: 1;}
`;

export const fadeInUp = keyframes`
0% { transform: translateY(20px); opacity: 0; },
100% { transform: translateY(0); opacity: 1;}
`;
