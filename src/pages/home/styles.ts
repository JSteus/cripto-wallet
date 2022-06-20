import styled from 'styled-components';
import { fadeInLeft, fadeInRight, fadeInUp } from '../../styles/transitions';

interface ColorState {
  colorState: boolean;
}

export const Container = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 15px;

  background: #fff;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  align-items: center;
  background: #ffb234;

  padding: 28.93px 21px 0 21px;
`;

export const User = styled.div`
  position: absolute;
  width: 333px;
  height: 80px;
  left: 21px;
  top: 108px;

  background: #ffffff;
  box-shadow: 0px 12px 35px rgba(1, 66, 106, 0.2);
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const UserName = styled.span`
  font-weight: 400;
  font-family: 'Karla', sans-serif;
  font-size: 22px;

  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: #5998c5;
  box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${fadeInRight} 0.5s linear;
`;

export const LogOutButton = styled.button`
  position: absolute;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: #e5e5e5;
  box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;

  animation: ${fadeInLeft} 0.5s linear;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 13px;

  animation: ${fadeInUp} 0.5s linear;
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 100%;
  color: var(--black);
  padding-bottom: 5px;
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  line-height: 107.6%;
  color: var(--grey);
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 0.5px solid #d2e3ef;
  margin-left: 10px;
`;

export const Body = styled.div`
  height: 100%;
  overflow-y: auto;

  scrollbar-color: var(--grey) transparent;

  &::-webkit-scrollbar {
    height: 12px;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--grey);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    filter: brightness(0.8);
  }
`;

export const Table = styled.table`
  width: 100%;
  padding: 68px 21px 0 21px;
  border-spacing: 0 8px;

  animation: ${fadeInUp} 0.5s linear;
`;

export const TableHead = styled.th`
  color: var(--light-grey);
  font-size: 12px;
  text-align: left;
  padding-bottom: 4px;
`;

export const TableRow = styled.tr`
  background: #ffffff;
  width: 333px;
  height: 50px;

  box-shadow: 0px 17px 60px rgba(45, 76, 113, 0.07),
    0px 3.79717px 13.4018px rgba(45, 76, 113, 0.0417275),
    0px 1.13052px 3.99006px rgba(45, 76, 113, 0.0282725);
`;

export const TableData = styled.td<ColorState>`
  color: var(--gray);
  font-size: 15px;
  line-height: 107.6%;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-color: #d2e3ef;
  border-radius: 0;

  &:first-child {
    border-width: 1px 0 1px 5px;
    border-color: #d2e3ef #d2e3ef #d2e3ef
      ${props => (props.colorState ? '#06a75c' : '#ED0000')};
    box-sizing: border-box;
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-width: 1px 1px 1px 0px;
    border-color: #d2e3ef #d2e3ef #d2e3ef #06a75c;
    box-sizing: border-box;
    border-radius: 0 4px 4px 0;
    color: ${props => (props.colorState ? '#06a75c' : '#ED0000')};
  }
`;
