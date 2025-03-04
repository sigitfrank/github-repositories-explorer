import { Grid2 } from '@mui/material';
import GithubExplorer from './components/organisms/github-explorer';

const App = () => {
  return (
    <Grid2
      container
      columnSpacing={4}
      rowSpacing={2}
      justifyContent="center"
      height="100%"
    >
      <Grid2 size={{ xs: 12, sm: 8, lg: 6 }}>
        <GithubExplorer />
      </Grid2>
    </Grid2>
  );
};

export default App;
