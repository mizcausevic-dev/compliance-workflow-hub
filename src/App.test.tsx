import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Compliance Workflow Hub', () => {
  it('renders the main workflow title and queue section', () => {
    render(<App />);

    expect(screen.getByText(/audit queues, approvals, exceptions/i)).toBeTruthy();
    expect(screen.getByText(/priority workflows/i)).toBeTruthy();
    expect(screen.getByText(/policy pressure/i)).toBeTruthy();
  });
});
