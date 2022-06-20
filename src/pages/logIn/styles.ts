import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 375px;
  margin: 0 auto;
  padding: 125px 21px 38px 21px;

  background: #fff;
`;

export const Detail = styled.strong`
  color: var(--green);
`;

export const Link = styled.span`
  color: var(--green);
  font-weight: 700;
  font-family: 'Karla', sans-serif;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`;

export const LoginHeader = styled.h2`
  color: var(--black);
  font-size: 35px;
  padding-bottom: 31px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    margin-top: 15px;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const LoginFooter = styled.p`
  font-size: 15px;
  color: var(--grey);
`;
