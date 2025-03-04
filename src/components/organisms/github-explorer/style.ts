import { AsSxObject } from '~src/lib/types/asSxObject.type';

export const GithubExplorerSx = AsSxObject({
  form: {
    display: 'flex',
    justifyContent: 'center',
    padding: 4,
    background: '#FFF',
    flexDirection: 'column',
    gap: 2,
  },
  resultList: {
    maxHeight: '400px',
    overflowY: 'auto',
  },
  resultWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
});
