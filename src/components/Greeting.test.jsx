import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Greeting from './Greeting';

describe('Greeting component', () => {
  it('renders a greeting with a name', () => {
    render(<Greeting name="Test User" />);
    const headingElement = screen.getByText(/Hello, Test User!/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders a default greeting when no name is provided', () => {
    render(<Greeting />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
