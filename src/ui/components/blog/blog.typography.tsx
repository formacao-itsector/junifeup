import React from 'react';

interface SharedTypographyProps {
  content: string | React.ReactNode;
  style?: string;
}

export const Title = ({ content, style }: SharedTypographyProps) => {
  return <h1 className={style ? style : 'text-3xl font-extrabold'}>{content}</h1>;
};

export const Subtitle = ({ content, style }: SharedTypographyProps) => {
  return <h1 className={style ? style : 'text-2xl text-zinc-400 font-bold'}>{content}</h1>;
};

export const Text = ({ content, style }: SharedTypographyProps) => {
  return <p className={style ? style : 'leading-snug text-zinc-400 indent-1 pt-3'}>{content}</p>;
};
