import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { GithubExplorerToolbarSx as sx } from './style';

type GithubExplorerToolbarProps = {
  search: string;
  loading: boolean;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error: boolean;
  helperText?: string;
};

const GithubExplorerToolbar = ({
  search,
  loading,
  onChange,
  error,
  helperText,
}: GithubExplorerToolbarProps) => {
  return (
    <Box sx={sx.toolbar}>
      <TextField
        name="username"
        value={search}
        placeholder="Enter username"
        sx={sx.textField}
        disabled={loading}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
      <Button
        sx={sx.button}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        loading={loading}
      >
        Search
      </Button>
    </Box>
  );
};

export default GithubExplorerToolbar;
