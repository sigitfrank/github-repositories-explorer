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

type RepoItemProps = {
  name: string;
};
const RepoItem = ({ name }: RepoItemProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={sx.repoListWrapper}>
          {[1, 2, 3].map((repo) => {
            return (
              <Box key={repo} sx={sx.repoListItem}>
                <Box sx={sx.repoTitle}>
                  <Typography component="h2">Repository Title</Typography>
                  <Typography sx={sx.repoStar}>
                    12
                    <Star />
                  </Typography>
                </Box>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias voluptatem modi laudantium totam, nesciunt tempora
                  voluptatum porro aliquam quibusdam, corporis, animi commodi?
                  Eaque maiores, dolorem soluta magnam error id dignissimos?
                </Typography>
              </Box>
            );
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default RepoItem;
