import { render, screen, fireEvent } from '@testing-library/react';
import { RiFlaskFill } from 'react-icons/ri';
import { Input } from '.';

describe('Input component', () => {
  test('Input should render placeholder correctly', () => {
    render(
      <Input
        icon={<RiFlaskFill />}
        isPassword={false}
        placeholderText="Test"
      />,
    );

    expect(screen.getByPlaceholderText('Test')).toBeInTheDocument();
  });

  test('Input should change type', () => {
    render(
      <Input icon={<RiFlaskFill />} isPassword={true} placeholderText="Test" />,
    );

    expect(screen.getByTestId('input')).toHaveAttribute('type', 'password');

    fireEvent.click(screen.getByTestId('input-type-icon'));

    expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
  });
});
