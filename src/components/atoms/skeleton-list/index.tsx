import { Skeleton, SkeletonProps } from '@mui/material';

type SkeletonListProps = {
  count?: number;
} & SkeletonProps;

const SkeletonList = ({ count = 1, ...rest }: SkeletonListProps) => {
  const items = new Array(count).fill('');
  return items.map((_skeleton, idx) => {
    return (
      <Skeleton
        key={idx}
        sx={{
          height: '64px',
        }}
        {...rest}
      />
    );
  });
};

export default SkeletonList;
