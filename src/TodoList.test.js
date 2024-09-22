import React from 'react';
import { render, userEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component', () => {
  const { getByText } = render(<TodoList />);
  expect(getByText(/New Todo/i)).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});



test('adds a new todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  
  const input = getByPlaceholderText(/New Todo/i);
  userEvent.type(input, 'New Todo');
  userEvent.click(getByText(/Add Todo/i));

  expect(getByText(/New Todo/i)).toBeInTheDocument();
});

test('removes a todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  
  const input = getByPlaceholderText(/New Todo/i);
  userEvent.type(input, 'Todo to remove');
  userEvent.click(getByText(/Add Todo/i));

  userEvent.click(getByText(/X/i));

  expect(getByText(/Todo to remove/i)).not.toBeInTheDocument();
});
