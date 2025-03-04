import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import GithubExplorerToolbar from '.';

const setup = (props = {}) => {
  const defaultProps = {
    search: '',
    loading: false,
    onChange: vi.fn(),
    error: false,
    helperText: '',
    ...props,
  };

  return render(<GithubExplorerToolbar {...defaultProps} />);
};

test('renders input and button', () => {
  setup();
  expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});

test('disables input and button when loading', () => {
  setup({ loading: true });
  expect(screen.getByPlaceholderText('Enter username')).toBeDisabled();
  expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();
});

test('set initial value correctly', async () => {
  const initialSearch = 'sigitfrank';
  const toolbar = setup({
    search: initialSearch,
  });
  const input = toolbar.getByPlaceholderText('Enter username');
  expect(input).toHaveValue(initialSearch);
});

test('shows error and helper text when error is true', () => {
  setup({ error: true, helperText: 'Cannot be empty' });
  expect(screen.getByText('Cannot be empty')).toBeInTheDocument();
});
