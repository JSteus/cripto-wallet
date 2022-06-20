import React from 'react';

import { Container } from './styles';

import logo from '../../assets/wallet.png';

interface LogoProps {
  width: string;
  height?: string;
}

export const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return <Container src={logo} wd={width} ht={height} alt="gavea logo" />;
};
