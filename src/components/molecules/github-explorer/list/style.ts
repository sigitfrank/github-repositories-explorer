import { AsSxObject } from '~src/lib/types/asSxObject.type';

export const RepoItemSx = AsSxObject({
  repoListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  repoListItem: {
    padding: '16px',
    background: '#DDD',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  repoTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 500,
  },
  repoStar: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 500,
  },
});
