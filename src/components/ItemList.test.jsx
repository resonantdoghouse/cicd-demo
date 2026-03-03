import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ItemList from './ItemList';

describe('ItemList component', () => {
  it('renders an empty list initially', () => {
    render(<ItemList />);
    expect(screen.getByText('Shopping List')).toBeInTheDocument();
    expect(screen.getByText('Your list is empty.')).toBeInTheDocument();
  });

  it('allows adding an item to the list', () => {
    render(<ItemList />);
    
    const input = screen.getByRole('textbox', { name: /new item input/i });
    const addButton = screen.getByRole('button', { name: /add item/i });

    fireEvent.change(input, { target: { value: 'Milk' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Milk')).toBeInTheDocument();
    expect(screen.queryByText('Your list is empty.')).not.toBeInTheDocument();
    expect(input.value).toBe(''); // Input should be cleared
  });

  it('allows removing an item from the list', () => {
    render(<ItemList />);
    
    const input = screen.getByRole('textbox', { name: /new item input/i });
    const addButton = screen.getByRole('button', { name: /add item/i });

    // Add an item first
    fireEvent.change(input, { target: { value: 'Bread' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Bread')).toBeInTheDocument();

    // Now remove it
    const removeButton = screen.getByRole('button', { name: /remove bread/i });
    fireEvent.click(removeButton);

    expect(screen.queryByText('Bread')).not.toBeInTheDocument();
    expect(screen.getByText('Your list is empty.')).toBeInTheDocument();
  });

  it('does not add empty items', () => {
    render(<ItemList />);
    
    const input = screen.getByRole('textbox', { name: /new item input/i });
    const addButton = screen.getByRole('button', { name: /add item/i });

    fireEvent.change(input, { target: { value: '   ' } }); // Only spaces
    fireEvent.click(addButton);

    expect(screen.getByText('Your list is empty.')).toBeInTheDocument();
  });
});
