import clsx from 'clsx';
import { FC } from 'react';

const Divider: FC<{ className?: string }> = ({ className }) => (
  <div
    className={clsx('max-w-full border-t border-surface-divider', className)}
  />
);

export default Divider;
