import { Box, Grid2 } from '@mui/material';
import GithubExplorer from './components/organisms/github-explorer';

const App = () => {
  return (
    <Box>
      <Grid2 container columnSpacing={4} rowSpacing={2} justifyContent="center">
        <Grid2 size={{ md: 6 }}>
          <GithubExplorer />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default App;
