import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { mocked } from 'jest-mock';
import { Button } from '.';

jest.mock('react-redux');

describe('Button component', () => {
  test('Button should render title correctly', () => {
    const useSelectorMocked = mocked(useSelector);

    useSelectorMocked.mockReturnValueOnce(false);

    render(<Button fill={true} buttonTitle="Test" />);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Button should render spinner', () => {
    const useSelectorMocked = mocked(useSelector);

    useSelectorMocked.mockReturnValueOnce(true);

    render(<Button fill={true} buttonTitle="Test" />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
