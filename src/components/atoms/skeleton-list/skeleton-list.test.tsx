import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import SkeletonList from '~src/components/atoms/skeleton-list';

test('renders the correct number of skeletons', () => {
  render(<SkeletonList count={3} />);
  const skeletons = screen.getAllByTestId('skeleton');
  expect(skeletons).toHaveLength(3);
});
