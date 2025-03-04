import { useFormik } from 'formik';
import { useMemo, useRef } from 'react';
import { queryKeys } from '../react-query/queryMutationKeys';
import { useQuery } from '@tanstack/react-query';
import {
  searchInitialValues,
  SearchValues,
  SearchValuesSchema,
} from '../schemas/search.schema';
import { getUsers } from '../api/user.api';

const useGithubExplorer = () => {
  const usernameRef = useRef('');
  const { values, touched, handleChange, errors, handleSubmit } =
    useFormik<SearchValues>({
      initialValues: searchInitialValues,
      onSubmit: async (values) => {
        usernameRef.current = values.username;
        refetch();
      },
      validationSchema: SearchValuesSchema,
    });

  const {
    data: userData,
    isFetching: gettingUsers,
    isFetched,
    refetch,
  } = useQuery({
    queryFn: () =>
      getUsers({
        username: values.username,
        filter: {
          page: 1,
          per_page: 5,
        },
      }),
    queryKey: [queryKeys.getUsers],
    enabled: false,
  });

  const similiarUsersWithUsername = useMemo(
    () =>
      userData?.items.filter((user) => {
        return user.login
          .toLowerCase()
          .startsWith(usernameRef.current.toLowerCase());
      }),
    [userData?.items],
  );

  const showResult = Boolean(isFetched || userData);

  return {
    showResult,
    gettingUsers,
    isFetched,
    touched,
    errors,
    search: values.username,
    usernameRef,
    similiarUsersWithUsername,
    handleChange,
    handleSubmit,
  };
};

export default useGithubExplorer;
