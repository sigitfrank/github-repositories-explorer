import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { expect, test } from 'vitest';
import UserAccordion from '.';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~src/lib/react-query';

const setup = (props = {}) => {
  const defaultProps = {
    name: '',
    ...props,
  };

  return render(
    <QueryClientProvider client={queryClient}>
      <UserAccordion {...defaultProps} />
    </QueryClientProvider>,
  );
};

test('waits for query to finish and checks repository content', async () => {
  const repoName = 'sigitfrank';
  setup({ name: repoName });

  const nameElement = screen.getByTestId('username');
  expect(nameElement).toHaveTextContent(repoName);

  await waitForElementToBeRemoved(() => screen.queryAllByTestId('skeleton'), {
    timeout: 5000,
  });

  const repoItems = await screen.findAllByTestId('repository-item');

  const noRepoElement = screen.queryByText('-No Repositories-');

  expect(repoItems.length > 0 || noRepoElement).toBeTruthy();
});
