import { GitHubUserResponse } from '../types/api/user.type';
import { appApiAxiosInstance } from '../baseHttp.lib';

type GetUsersParams = {
  username: string;
  filter?: {
    per_page?: number;
    page?: number;
  };
};
export async function getUsers({ username, filter }: GetUsersParams) {
  const newFilter = {
    ...(filter?.page && { page: String(filter?.page) }),
    ...(filter?.per_page && {
      per_page: String(filter?.per_page),
    }),
  };

  const queryParams = new URLSearchParams({
    q: username,
    ...newFilter,
  });

  const response = await appApiAxiosInstance.get<GitHubUserResponse>(
    `/search/users?${queryParams.toString()}`,
  );
  return response.data;
}
