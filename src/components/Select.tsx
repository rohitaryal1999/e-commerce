import SelectUI, {
  components,
  GroupBase,
  Props,
  StylesConfig,
} from 'react-select';

const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group>
) => {
  const { classNamePrefix } = props;
  return (
    <SelectUI
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,

        colors: {
          ...theme.colors,
          primary: '#2C3741',
          primary25: '#EDF2F7',
        },
      })}
      // closeMenuOnSelect={false}
      {...props}
      // tailwind uses this class prefix to apply style
      classNamePrefix={`react-select${classNamePrefix || ''}`}
    />
  );
};

export default Select;
export type { StylesConfig };

export type Option<T = string> = {
  readonly label: string;
  readonly value: T;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
};
export type SelectOptions<T = string> = Option<T>[];

/* eslint-disable react/prop-types */
// @ts-ignore
export const ValueContainer = ({ children, ...props }) => {
  let [values] = children;
  const [, input] = children;
  if (Array.isArray(values)) {
    const plural = values.length === 1 ? '' : 's';
    values = `${values.length} item${plural} selected`;
  }

  return (
    // @ts-ignore
    <components.ValueContainer {...props}>
      {values}
      {input}
    </components.ValueContainer>
  );
};

export const customSelectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    height: '48px',
  }),
};
