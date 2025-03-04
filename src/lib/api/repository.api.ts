import { GitHubUserResponse } from '../types/api/user.type';
import { appApiAxiosInstance } from '../baseHttp.lib';

type GetUserRepositoriesParams = {
  username: string;
  filter: {
    per_page?: number;
    page?: number;
  };
};
export async function getUserRepositories({
  username,
  filter,
}: GetUserRepositoriesParams) {
  const newFilter = {
    ...(filter.page && { page: String(filter.page) }),
    ...(filter.per_page && {
      per_page: String(filter.per_page),
    }),
  };

  const queryParams = new URLSearchParams(newFilter);

  const response = await appApiAxiosInstance.get<GitHubUserResponse>(
    `/users/${username}/repos?${queryParams.toString()}`,
  );
  return response.data;
}
