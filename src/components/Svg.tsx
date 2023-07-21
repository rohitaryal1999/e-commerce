import clsx from 'clsx';
import * as React from 'react';
import { FC } from 'react';

type SvgProps = {
  id: string;
  width?: number;
  height?: number;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const Svg: FC<
  SvgProps & {
    button?: boolean;
    onClick?: (_: any) => void;
    disabled?: boolean;
    buttonClassName?: string;
  }
> = ({
  button,
  onClick = () => {},
  disabled = false,
  buttonClassName,
  ...rest
}) =>
  button ? (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'rounded p-1 transition hover:bg-surface-divider',
        buttonClassName
      )}
    >
      <SvgBasic {...rest} />
    </button>
  ) : (
    <SvgBasic {...rest} />
  );

const SvgBasic: FC<SvgProps> = ({
  id,
  width = 24,
  height = 24,
  className = '',
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    className={clsx(className, {
      'stroke-primary': !className?.includes('stroke'),
    })}
    {...rest}
  >
    <use href={`/sprite.svg#${id}`} />
  </svg>
);

export default Svg;
