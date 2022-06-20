import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Logo } from '../../components/Logo';
import { logOut } from '../../store/actions/authenticationActions';
import { RootState } from '../../store/reducers';
import { tableData } from '../../utils/mockData';
import { nameFormatter } from '../../utils/formaters';

import {
  Body,
  Container,
  Header,
  Icon,
  LogOutButton,
  Subtitle,
  Table,
  TableData,
  TableHead,
  TableRow,
  TextContainer,
  Title,
  User,
  UserName,
} from './styles';

export const Home: React.FC = () => {
  const name = useSelector((state: RootState) => state.auth.name) || 'Usuário';
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>
        <Logo width="50px" />
        <User>
          <UserName>{nameFormatter(name)}</UserName>
          <TextContainer>
            <Title>Olá, {name.split(" ")[0]}</Title>
            <Subtitle>Gavea Marketplace</Subtitle>
          </TextContainer>
          <LogOutButton onClick={() => dispatch(logOut())}>
            <RiLogoutBoxRLine />
          </LogOutButton>
        </User>
      </Header>
      <Body>
        <Table>
          <thead>
            <tr>
              <TableHead></TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>R$</TableHead>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <TableRow key={index}>
                <TableData colorState={item.positive}>
                  <Icon src={item.icon} />
                </TableData>
                <TableData colorState={item.positive}>{item.part}</TableData>
                <TableData colorState={item.positive}>{item.value}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Body>
    </Container>
  );
};
