import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm component', () => {
  const { getByPlaceholderText } = render(<NewTodoForm addTodo={() => {}} />);
  expect(getByPlaceholderText(/New Todo/i)).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
