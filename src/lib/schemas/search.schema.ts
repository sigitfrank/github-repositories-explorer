import * as Yup from 'yup';

export type SearchValues = {
  username: string;
};

export const SearchValuesSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
});

export const searchInitialValues = {
  username: '',
};
