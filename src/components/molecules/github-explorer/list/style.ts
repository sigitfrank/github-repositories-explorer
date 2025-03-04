import { AsSxObject } from '~src/lib/types/asSxObject.type';

export const RepoItemSx = AsSxObject({
  root: {
    borderRadius: '8px',
  },
  accordionTrigger: {
    background: '#EEE',
    borderRadius: '8px',
  },
  repoListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  repoListItem: {
    padding: '16px',
    background: '#EEE',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  repoTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 500,
  },
  repoTitle: {
    fontWeight: 500,
  },
  repoStar: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 500,
  },
});
