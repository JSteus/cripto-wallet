import styled from "styled-components";
import { fadeInRight } from "../../styles/transitions";

interface InputStyleProps {
  visible: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 333px;
  height: 55px;
  border: 1px solid #d2e3ef;
  border-radius: 4px;
  color: var(--grey);
  margin-bottom: 15px;
  animation: ${fadeInRight} 0.5s linear;

  &:focus-within {
    border: 1.5px solid var(--black);
    transition: border 0.3s linear;
    color: var(--black);
  }
`;

export const Icon = styled.span<InputStyleProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  font-size: 20px;
  width: 54px;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: color 0.3s linear;

`;

export const TextEntry = styled.input`
  border: none;
  font-size: 16px;
  width: 100%;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b1bec2;
    transition: color 0.3s linear;
  }
  :-ms-input-placeholder {
    color: #b1bec2;
    transition: color 0.3s linear;
  }

  &:focus {
    outline: none;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--black);
    }
    :-ms-input-placeholder {
      color: var(--black);
    }
  }
`;
