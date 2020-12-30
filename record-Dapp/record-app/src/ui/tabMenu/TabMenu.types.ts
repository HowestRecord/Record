import { ReactNode } from 'react';

export type TabMenuProps = {
  tabs: Tab[];
  isFullScreen?: boolean;
  activeColor?: 'primary' | 'secondary';
  dense?: boolean;
};

export type Tab = {
  label: string;
  content: ReactNode;
};

export type TabMenuStyleProps = {
  isFullScreen: boolean;
  activeColor: 'primary' | 'secondary';
  dense: boolean;
};
