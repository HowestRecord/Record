import { ReactNode } from 'react';

import { AppRoute } from 'routing/AppRoute.enum';

export type PageProps = {
  children: NonNullable<ReactNode>;
  title?: string;
  onMenuClick?: () => void;
  backPage?: AppRoute;
  hideMenu?: boolean;
  hideBack?: boolean;
  onBackClick?: VoidFunction;
  hideUserInfo?: boolean;
};
