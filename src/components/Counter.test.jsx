import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter component', () => {
  it('renders with default initial value of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Current Count: 0');
  });

  it('renders with a custom initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Current Count: 5');
  });

  it('increments internal count on increase button click', () => {
    render(<Counter />);
    const increaseBtn = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(increaseBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Current Count: 1');
  });

  it('decrements internal count on decrease button click', () => {
    render(<Counter />);
    const decreaseBtn = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decreaseBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Current Count: -1');
  });
});
