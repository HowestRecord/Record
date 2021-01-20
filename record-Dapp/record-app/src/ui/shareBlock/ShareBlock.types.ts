import { ReactNode } from 'react';

export type ShareBlockProps = {
  className?: string;
  items: ShareBlockItem[];
  shares: number;
  onClick?: VoidFunction;
};

export type ShareBlockItem = {
  text: string;
  label: string;
  textIcon: React.ElementType;
  labelIcon?: React.ElementType;
  url?: string;
  content?: ReactNode;
};
