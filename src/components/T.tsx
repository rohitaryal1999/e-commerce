import clsx from 'clsx';
import { FC } from 'react';

export type FontType =
  | 'd1'
  | 'd2'
  | 'd3'
  | 'd4'
  | 'd5'
  | 'd6'
  | 'd7'
  | 'd8'
  | 'd9'
  | 'd10'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'sub'
  | 'subMicro'
  | 'p10'
  | 'p12'
  | 'p14'
  | 'p16'
  | 'p18'
  | 'p20'
  | 'pill'
  | 'buttonSmall'
  | 'buttonBase'
  | 'buttonLarge';

const T: FC<{
  className?: string;
  type?: FontType;
  css?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
}> = ({ className, type = 'h6', css, children, id }) => {
  const { el: Tag, classes } = Element[type];
  return (
    <Tag
      style={css}
      className={clsx(
        { 'text-primary': !className?.includes('text-') },
        classes,
        className
      )}
      id={id}
    >
      {children}
    </Tag>
  );
};

const Element: {
  [k in FontType]: { el: keyof JSX.IntrinsicElements; classes: string };
} = {
  h1: { el: 'h1', classes: '' },
  h2: { el: 'h2', classes: '' },
  h3: { el: 'h3', classes: '' },
  h4: { el: 'h4', classes: '' },
  h5: { el: 'h5', classes: '' },
  h6: { el: 'h6', classes: '' },
  d1: { el: 'p', classes: 'font-display text-d1' },
  d2: { el: 'p', classes: 'font-display text-d2' },
  d3: { el: 'p', classes: 'font-display text-d3' },
  d4: { el: 'p', classes: 'font-display text-d4' },
  d5: { el: 'p', classes: 'font-display text-d5' },
  d6: { el: 'p', classes: 'font-display text-d6' },
  d7: { el: 'p', classes: 'font-display text-d7' },
  d8: { el: 'p', classes: 'font-display text-d8' },
  d9: { el: 'p', classes: 'font-display text-d9' },
  d10: { el: 'p', classes: 'font-display text-d10' },
  sub: { el: 'p', classes: 'font-bold text-sub' },
  subMicro: { el: 'p', classes: 'font-bold text-subMicro' },
  p10: { el: 'p', classes: 'text-p10' },
  p12: { el: 'p', classes: 'text-p12' },
  p14: { el: 'p', classes: 'text-p14' },
  p16: { el: 'p', classes: 'text-p16' },
  p18: { el: 'p', classes: 'text-p18' },
  p20: { el: 'p', classes: 'text-p20' },
  buttonSmall: { el: 'p', classes: 'text-buttonSmall' },
  buttonBase: { el: 'p', classes: 'text-buttonBase' },
  buttonLarge: { el: 'p', classes: 'text-buttonLarge' },
  pill: { el: 'p', classes: 'text-buttonBase font-bold' },
};

export default T;

// export { T }
