import React from 'react';
import { render ,fireEvent } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  const { getByText } = render(<App />)
  expect(getByText('React Todo')).toBeInTheDocument()
})

test('renders initial todos', () => {
  const { getByText } = render(<App />)
  expect(getByText('React Hooks')).toBeInTheDocument()
  expect(getByText('Redux-saga')).toBeInTheDocument()
  expect(getByText('Cypress.io')).toBeInTheDocument()
})



test('adds new todo when form is submitted', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText('Input task');
  const form = input.closest('form');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.submit(form);

  const newTodo = getByText('New Task');
  expect(newTodo).toBeInTheDocument();
});


