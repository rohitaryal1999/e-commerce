import { getMonth, getYear } from 'date-fns';
import * as React from 'react';
import { FC, forwardRef } from 'react';
import DatePickerUI from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Svg from './Svg';
import T from './T';

const DatePicker: FC<{
  value?: Date;
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: ((date: Date) => void) | ((dates: [Date, Date | null]) => void);
  className?: string;
  selectsRange?: boolean;
  maxDate?: Date;
  minDate?: Date;
  dateFormat?: string;
  customInput?: React.ReactNode;
  showDefault?: boolean;
  placeholderText?: string;
  disabled?: boolean;
}> = ({
  onChange = () => {},
  value,
  className,
  selectsRange,
  startDate,
  endDate,
  maxDate,
  dateFormat,
  customInput,
  minDate,
  showDefault = true,
  placeholderText,
  disabled,
}) => (
  <DatePickerUI
    onChange={onChange}
    selected={showDefault ? value || new Date() : value}
    dateFormat={dateFormat ?? 'dd MMM yy'}
    className={className}
    renderCustomHeader={renderCustomHeader}
    customInput={customInput ?? <CustomInput />}
    showPopperArrow={false}
    selectsRange={selectsRange}
    startDate={startDate}
    endDate={endDate}
    maxDate={maxDate}
    minDate={minDate}
    placeholderText={placeholderText}
    disabled={disabled}
  />
);

export const CustomInputCompact = forwardRef(
  (props: any, ref: React.LegacyRef<HTMLButtonElement>) => (
    <button
      {...props}
      className='datepicker-custom-input-compact flex h-[1.875rem] items-center'
      ref={ref}
    >
      <Svg id='calendar' className='mr-1' />
      <T type='p14'>{props.value}</T>
    </button>
  )
);

const CustomInput = forwardRef(
  (props, ref: React.LegacyRef<HTMLInputElement>) => (
    <div className='relative block'>
      <input
        {...props}
        type='text'
        ref={ref}
        className='h-10 w-full rounded-md border border-surface-background pl-4 pr-10 text-h6 font-semibold text-secondary'
      />
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <span
        className='absolute inset-y-0 right-0 m-1 flex cursor-pointer items-center rounded px-1 transition hover:bg-surface-divider'
        // @ts-ignore
        // eslint-disable-next-line react/prop-types
        onClick={() => props.onClick()}
      >
        <Svg id='calendar' className='stroke-secondary' />
      </span>
    </div>
  )
);

const renderCustomHeader: FC<{
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}> = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div className='flex justify-between gap-2 bg-white px-2'>
    <select
      value={getYear(date)}
      className='cursor-pointer rounded bg-white text-h5 font-semibold text-primary transition hover:bg-surface-divider'
      onChange={({ target: { value } }) => changeYear(Number(value))}
    >
      {years.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <select
      value={months[getMonth(date)]}
      className='cursor-pointer rounded bg-white text-h5 font-semibold text-primary transition hover:bg-surface-divider'
      onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
    >
      {months.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className='flex'>
      <Svg
        id='arrow'
        button
        buttonClassName='mx-2 rotate-90'
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      />
      <Svg
        id='arrow'
        button
        buttonClassName='mx-2 -rotate-90'
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      />
    </div>
  </div>
);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const range = (start: number, end: number) =>
  Array.from(Array(end - start + 1).keys()).map((x) => x + start);
const years = range(1900, 2099);

export default DatePicker;
