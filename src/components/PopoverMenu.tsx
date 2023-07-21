import clsx from 'clsx';
import { FC, Fragment } from 'react';
import T from '@components/T';
import { Popover, Transition } from '@headlessui/react';

type XPosition = 'left' | 'center' | 'right';
type YPosition = 'top' | 'center' | 'bottom';
type PopoverProps = {
  id: string;
  items: {
    title: string;
    callback: (id: string) => void;
    disabled?: boolean;
    className?: string;
  }[];
  svg: JSX.Element;
  btnClass?: string;
  panelClass?: string;
  positionX?: XPosition;
  positionY?: YPosition;
};

const getElementPositionX: Record<XPosition, string> = {
  left: '-translate-x-full',
  center: '-translate-x-1/2',
  right: 'translate-x-12',
};
const getElementPositionY: Record<YPosition, string> = {
  top: '-translate-y-full',
  center: '-translate-y-1/2',
  bottom: 'translate-y-0',
};

export const PopoverMenu: FC<PopoverProps> = ({
  id,
  items,
  btnClass,
  panelClass,
  svg,
  positionX,
  positionY,
}) => (
  <Popover className='relative'>
    {(popover: { open: boolean; close: () => void }) => (
      <>
        <Popover.Button
          className={clsx(
            'rounded-lg border-solid border-surface-divider bg-white',
            `${popover.open ? '' : 'text-opacity-90'}`,
            btnClass
          )}
        >
          {svg}
        </Popover.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <Popover.Panel
            className={clsx(
              'absolute -left-1 z-10 mt-2 transform rounded-lg border border-surface-divider',
              getElementPositionX[positionX || 'center'],
              getElementPositionY[positionY || 'bottom'],
              panelClass
            )}
          >
            {items.map(({ title, callback, disabled, className }, index) => (
              <div
                className={clsx(
                  'bg-white p-1',
                  { 'rounded-t-lg': index === 0 },
                  { 'rounded-b-lg': index === items.length - 1 }
                )}
                key={title}
              >
                <div
                  role='button'
                  tabIndex={0}
                  className={clsx(
                    'relative cursor-pointer p-3 pr-10',
                    className,
                    {
                      'cursor-not-allowed rounded-lg bg-accent-gray': disabled,
                    }
                  )}
                  onClick={() => {
                    if (!disabled) {
                      callback(id);
                      popover.close();
                    }
                  }}
                >
                  <T type='p14' className='font-semibold'>
                    {title}
                  </T>
                </div>
              </div>
            ))}
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);
