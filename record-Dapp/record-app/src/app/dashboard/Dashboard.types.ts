export type DashboardProps = {
  isLoading: boolean;
  isError: boolean;
  fetchTokens: () => Promise<void>;
};
