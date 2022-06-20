import { ButtonHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { LoadingSpinner } from '../LoadingSpinner';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill: boolean;
  buttonTitle: string;
}

export const Button: React.FC<ButtonProps> = ({
  fill,
  buttonTitle,
  ...rest
}) => {
  const loading = useSelector((state: RootState) => state.auth.loading);
  console.log(loading);
  return (
    <Container disabled={loading} $fill={fill} {...rest}>
      {loading ? <LoadingSpinner /> : buttonTitle}
    </Container>
  );
};
