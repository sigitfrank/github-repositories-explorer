import { Box, Typography } from '@mui/material';
import { GithubExplorerSx as sx } from './style';
import SkeletonList from '~src/components/atoms/skeleton-list';
import GithubExplorerToolbar from '~src/components/molecules/github-explorer/toolbar';
import useGithubExplorer from '~src/lib/hooks/use-github-explorer';
import UserAccordion from '~src/components/molecules/github-explorer/user-accordion';

const GithubExplorer = () => {
  const {
    showResult,
    gettingUsers,
    touched,
    errors,
    search,
    similiarUsersWithUsername,
    usernameRef,
    handleChange,
    handleSubmit,
  } = useGithubExplorer();

  return (
    <Box component="form" onSubmit={handleSubmit} sx={sx.form}>
      <GithubExplorerToolbar
        search={search}
        loading={gettingUsers}
        onChange={handleChange}
        error={Boolean(touched.username && errors.username)}
        helperText={touched.username ? errors.username : ''}
      />
      <Box sx={sx.resultWrapper}>
        {showResult && (
          <Typography>Showing users for "{usernameRef.current}"</Typography>
        )}
        <Box sx={sx.resultList}>
          {gettingUsers ? (
            <SkeletonList count={5} />
          ) : (
            similiarUsersWithUsername?.map((user) => {
              return <UserAccordion name={user.login} key={user.id} />;
            })
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default GithubExplorer;
