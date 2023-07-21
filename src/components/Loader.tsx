import clsx from 'clsx';
import { FC } from 'react';
import Svg from './Svg';

const Loader: FC<{
  loading?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ loading = true, className, size = 'md' }) =>
  loading ? (
    <div className='flex items-center justify-center'>
      <div
        className={clsx(
          'animate-spin',
          {
            'h-6 w-6': size === 'sm',
            'h-10 w-10': size === 'md',
            'h-16 w-16': size === 'lg',
          },
          className
        )}
      >
        {size === 'sm' ? (
          <Svg id='loader' viewBox='0 0 49 40' height={24} width={24} />
        ) : null}
        {size === 'md' ? (
          <Svg id='loader' viewBox='0 0 49 40' height={40} width={40} />
        ) : null}
        {size === 'lg' ? (
          <Svg id='loader' viewBox='0 0 49 40' height={62} width={62} />
        ) : null}
      </div>
    </div>
  ) : null;

export default Loader;
