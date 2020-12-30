import { ReactNode } from 'react';

export type InfoBlockProps = {
  className?: string;
  items: InfoBlockItem[];
  onClick?: VoidFunction;
};

export type InfoBlockItem = {
  text: string;
  label: string;
  textIcon: React.ElementType;
  labelIcon?: React.ElementType;
  url?: string;
  content?: ReactNode;
};
