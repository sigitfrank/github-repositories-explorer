import { useFormik } from 'formik';
import { useEffect, useMemo, useRef } from 'react';
import { queryKeys } from '../react-query/queryMutationKeys';
import { useQuery } from '@tanstack/react-query';
import {
  searchInitialValues,
  SearchValues,
  SearchValuesSchema,
} from '../schemas/search.schema';
import { getUsers } from '../api/user.api';
import { useSearchParams } from 'react-router-dom';
import { useAppStore } from '~src/lib/store/appStore';

const useGithubExplorer = () => {
  const { hasLoaded, setHasLoaded } = useAppStore();

  const usernameRef = useRef('');
  const [searchParams, setSearchParams] = useSearchParams();
  const qStateUsername = searchParams.get('username');
  const {
    values,
    touched,
    handleChange,
    errors,
    setFieldValue,
    handleSubmit,
    submitForm,
  } = useFormik<SearchValues>({
    enableReinitialize: true,
    initialValues: searchInitialValues,
    onSubmit: async (values) => {
      usernameRef.current = values.username;
      setSearchParams({ username: values.username });
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

  useEffect(() => {
    if (!qStateUsername) return;
    setFieldValue('username', qStateUsername);
  }, [qStateUsername, setFieldValue]);

  useEffect(() => {
    if (hasLoaded) return;
    if (values.username !== qStateUsername || !qStateUsername) return;
    submitForm();
    setHasLoaded(true);
  }, [values.username, qStateUsername, hasLoaded, setHasLoaded, submitForm]);

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
