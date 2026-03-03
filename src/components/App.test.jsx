import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Integration', () => {
  it('renders all main sections correctly', () => {
    render(<App />);
    
    // Header
    expect(screen.getByRole('heading', { level: 1, name: /My React Testing Demo/i })).toBeInTheDocument();
    
    // Greeting component
    expect(screen.getByRole('heading', { level: 1, name: /Hello, Demo User!/i })).toBeInTheDocument();
    
    // Counter component
    expect(screen.getByRole('heading', { level: 2, name: /Counter Component/i })).toBeInTheDocument();
    expect(screen.getByText('Current Count: 10')).toBeInTheDocument();
    
    // ItemList component
    expect(screen.getByRole('heading', { level: 2, name: /Shopping List/i })).toBeInTheDocument();
  });

  it('allows interaction with the ItemList within the App', () => {
    render(<App />);
    
    const input = screen.getByRole('textbox', { name: /new item input/i });
    const addButton = screen.getByRole('button', { name: /add item/i });

    fireEvent.change(input, { target: { value: 'Apples' } });
    fireEvent.click(addButton);

    // Verify it appeared in the DOM
    expect(screen.getByText('Apples')).toBeInTheDocument();
  });
  
  it('allows interaction with both the custom Counter and the native Vite counter independently', () => {
    render(<App />);
    
    // Custom Counter
    const increaseBtn = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(increaseBtn);
    expect(screen.getByText('Current Count: 11')).toBeInTheDocument();

    // Native Vite Counter (starts at 0)
    const viteCounterBtn = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(viteCounterBtn);
    
    // Custom counter shouldn't have changed
    expect(screen.getByText('Current Count: 11')).toBeInTheDocument();
    // Vite counter should have incremented
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});
