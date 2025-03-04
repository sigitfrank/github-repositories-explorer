import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Star } from '@mui/icons-material';
import { RepoItemSx as sx } from './style';
import { useQuery } from '@tanstack/react-query';
import { getUserRepositories } from '~src/lib/api/repository.api';
import { queryKeys } from '~src/lib/react-query/queryMutationKeys';
import SkeletonList from '~src/components/atoms/skeleton-list';
import { memo } from 'react';

type RepoItemProps = {
  name: string;
};
const UserItem = memo(({ name }: RepoItemProps) => {
  const { data: repositories, isFetching: gettingRepository } = useQuery({
    queryFn: () =>
      getUserRepositories({
        username: name,
      }),
    queryKey: [queryKeys.getUserRepositories, { name }],
    enabled: Boolean(name),
  });

  const userRepositories = repositories ?? [];

  return (
    <Accordion sx={sx.root}>
      <AccordionSummary
        sx={sx.accordionTrigger}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="repo-content"
        id="repo-header"
      >
        <Typography component="span">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {gettingRepository ? (
          <SkeletonList count={3} />
        ) : (
          <Box sx={sx.repoListWrapper}>
            {userRepositories.length === 0 ? (
              <Typography>-No Repositories-</Typography>
            ) : (
              userRepositories.map((repository) => (
                <Box key={repository.id} sx={sx.repoListItem}>
                  <>
                    <Box sx={sx.repoTitleWrapper}>
                      <Typography component="h2" sx={sx.repoTitle}>
                        {repository.name}
                      </Typography>
                      <Typography sx={sx.repoStar}>
                        {repository.stargazers_count}
                        <Star />
                      </Typography>
                    </Box>
                    <Typography>
                      {repository.description ?? '-No Description-'}
                    </Typography>
                  </>
                </Box>
              ))
            )}
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
});

export default UserItem;
