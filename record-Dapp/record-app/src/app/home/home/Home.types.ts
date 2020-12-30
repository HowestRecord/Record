export type HomeProps = {
  onLogin: () => Promise<void>;
  isLoading: boolean;
  errorMessageId?: string;
};

export enum LoginScreens {
  LOGIN_OPTIONS,
}
