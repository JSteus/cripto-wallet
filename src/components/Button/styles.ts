import styled from 'styled-components';
import { fadeInRight } from '../../styles/transitions';

interface ButtonStyleProps {
  $fill: boolean;
}

export const Container = styled.button<ButtonStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 30px 18px;
  animation: ${fadeInRight} 0.5s linear;

  border: 1px solid ${props => (props.$fill ? `var(--green)` : 'white')};
  border-radius: 4px;
  color: #fff;
  background: ${props => (props.$fill ? `var(--green)` : 'transparent')};
  width: 333px;
  height: 55px;

  &:disabled {
    background: var(--gray);
    border: 1px solid var(--light-grey);
    cursor: default;

    &:hover {
      filter: none;
    }
  }
`;
