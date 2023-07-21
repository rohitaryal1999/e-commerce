import clsx from 'clsx';
import * as React from 'react';
import { FC } from 'react';
import Svg from './Svg';
import T from './T';

const Input: FC<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    value?: string;
    label?: string;
    onChange?: (value: string) => void;
    placeHolder?: string;
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    icon?: string;
    onIconClick?: () => void;
    iconClassName?: string;
    inputClassName?: string;
  }
> = ({ icon, onIconClick, iconClassName, ...rest }) =>
  icon ? (
    <div className='relative flex items-center'>
      <InputBase {...rest} />
      <span
        className={clsx(
          'absolute right-1.5',
          onIconClick ? 'bottom-0.5' : 'bottom-2.5'
        )}
      >
        <Svg
          id={icon}
          button={Boolean(onIconClick)}
          className={iconClassName}
          onClick={(e) => {
            if (onIconClick) onIconClick();
            e.preventDefault();
          }}
        />
      </span>
    </div>
  ) : (
    <InputBase {...rest} />
  );

export const InputBase: FC<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    value?: string;
    onChange?: (value: string) => void;
    placeHolder?: string;
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    inputClassName?: string;
  }
> = ({
  value,
  onChange = () => {},
  placeHolder,
  className,
  type,
  label,
  inputClassName,
  ...rest
}) => (
  <div className={clsx('w-full', className)}>
    {label ? (
      <label htmlFor='input'>
        <T type='p14' className='pb-2 font-semibold'>
          {label}
        </T>
        <input
          {...rest}
          id='input'
          className={clsx(
            'h-10 w-full rounded-md border border-surface-divider bg-white px-4 text-h6 font-semibold placeholder:text-h6 placeholder:font-semibold placeholder:text-secondary focus:!border-primary focus:!ring-primary disabled:bg-gray-200',
            inputClassName || ''
          )}
          placeholder={placeHolder}
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    ) : null}
  </div>
);

export default Input;
