import { AsSxObject } from '~src/lib/types/asSxObject.type';

export const GithubExplorerToolbarSx = AsSxObject({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  textField: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
});
