import { AsSxObject } from '~src/lib/types/asSxObject.type';

export const GithubExplorerSx = AsSxObject({
  form: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 4,
    background: '#FFF',
    flexDirection: 'column',
    gap: 2,
    height: '100%',
  },
  resultList: {
    maxHeight: 'calc(100svh - 235px)',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  resultWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
});
