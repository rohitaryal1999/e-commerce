import Svg from '@components/Svg';
import T from '@components/T';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import { FC, Fragment, useRef } from 'react';

export const Modal: FC<{
  ModalTitle?: React.ReactNode;
  ModalBody?: React.ReactNode;
  ModalFooter?: React.ReactNode;
  open: boolean;
  close: () => void;
  width?: 'md' | 'lg' | 'xl' | '2xl';
  position?: 'top' | 'middle' | 'bottom';
  className?: string;
  containerClassName?: string;
}> = ({
  ModalTitle,
  ModalBody,
  ModalFooter,
  open,
  close,
  width = 'md',
  position = 'middle',
  className = '',
  containerClassName = '',
}) => {
  const closeModal = () => {
    close();
  };
  const closeRef = useRef(null);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as='div'
        open={open}
        className={clsx(
          'fixed inset-0 z-10 overflow-y-auto',
          containerClassName
        )}
        initialFocus={closeRef}
        onClose={closeModal}
      >
        <div className={clsx('min-h-screen text-center')}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay
              className={clsx(
                'fixed inset-0 bg-surface-overlay',
                open ? 'opacity-20' : 'opacity-0'
              )}
            />
          </Transition.Child>
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div
              className={clsx(
                'my-8 inline-block w-full transform rounded-2xl bg-white p-6 shadow-xl transition-all',
                { 'max-w-md': width === 'md' },
                { 'max-w-lg': width === 'lg' },
                { 'max-w-xl': width === 'xl' },
                { 'max-w-2xl': width === '2xl' },
                { 'mt-28 align-top': position === 'top' },
                { 'align-middle': position === 'middle' },
                { 'mb-28 align-bottom': position === 'bottom' },
                className
              )}
            >
              {ModalTitle}
              {ModalBody}
              {ModalFooter}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export const ModalTitle: FC<{
  headerText?: string;
  onClose: () => void;
  hideCloseButton?: boolean;
}> = ({ headerText, onClose, hideCloseButton = false }) => (
  <div className='flex gap-2 p-2 pb-0'>
    <div className='flex w-full justify-start'>
      <T type='h2' className='font-semibold tracking-[-0.01em]'>
        {headerText}
      </T>
    </div>
    <div className={`text-center ${hideCloseButton ? 'hidden' : 'flex'}`}>
      <Svg
        button
        id='cross'
        className='h-[2rem] w-[2rem] font-semibold'
        onClick={onClose}
      />
    </div>
  </div>
);
