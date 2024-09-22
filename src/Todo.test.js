import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

const mockRemoveTodo = jest.fn();
const mockUpdateTodo = jest.fn();

test('renders Todo component', () => {
  const { getByText } = render(
    <Todo id={1} task="Test Todo" removeTodo={mockRemoveTodo} updateTodo={mockUpdateTodo} completed={false} />
  );
  expect(getByText(/Test Todo/i)).toBeInTheDocument();
  expect(getByText(/Edit/i)).toBeInTheDocument();
  expect(getByText(/X/i)).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(
    <Todo id={1} task="Test Todo" removeTodo={mockRemoveTodo} updateTodo={mockUpdateTodo} completed={false} />
  );
  expect(asFragment()).toMatchSnapshot();
});


test('updates a todo', () => {
    const { getByText, getByDisplayValue, getByRole } = render(
      <Todo id={1} task="Old Task" removeTodo={mockRemoveTodo} updateTodo={mockUpdateTodo} completed={false} />
    );
  
    userEvent.click(getByText(/Edit/i));
    const input = getByDisplayValue(/Old Task/i);
    userEvent.clear(input);
    userEvent.type(input, 'Updated Task');
    userEvent.click(getByRole('button', { name: /Save/i }));
  
    expect(mockUpdateTodo).toHaveBeenCalledWith(1, 'Updated Task');
  });
  