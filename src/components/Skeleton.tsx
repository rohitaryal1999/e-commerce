import { FC } from 'react';

import clsxm from '@src/lib/clsxm';

// type SkeletonProps = React.ComponentPropsWithoutRef<'div'>;

const Skeleton: FC<{ addClassName: string }> = ({ addClassName, ...rest }) => (
  <div
    className={clsxm('animate-shimmer bg-[#f6f7f8]', addClassName)}
    style={{
      backgroundImage:
        'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
      backgroundSize: '700px 100%',
      backgroundRepeat: 'no-repeat',
    }}
    {...rest}
  />
);

export default Skeleton;
