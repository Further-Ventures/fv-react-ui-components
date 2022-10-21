import classNames from 'classnames';
import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { ICheckExtra, ISize, TCheckboxType } from '../InputWithToggle';

interface ICheckbox {
  name: string;
  heading?: React.ReactNode;
  label?: React.ReactNode;
  hint?: string;
  error?: string;
  isChecked?: boolean;
  disabled?: boolean;
}
interface ICheckboxGroupProps {
  header: ICheckbox;
  checkboxes: ReadonlyArray<ICheckbox>;
  variation?: 'default' | 'circle';
  type?: TCheckboxType;
  size?: 'default' | 'large';
  setSelected?: (selected: string[]) => void;
  horizontalPosition?: 'left' | 'right';
  verticalPosition?: 'top' | 'middle';
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps & ISize & ICheckExtra> = ({
  variation = 'default',
  size = 'default',
  header,
  checkboxes,
  className,
  setSelected,
  horizontalPosition,
  verticalPosition,
}) => {
  const [parentCheckbox, setParentCheckbox] = useState({
    type: 'intermediate',
    isChecked: header.isChecked || false,
  });
  const [selectedChildCheckboxes, setSelectedChildCheckboxes] = useState<string[]>(
    checkboxes?.filter((item) => item.isChecked).map((item) => item.name)
  );

  const handleChildChange = (e: React.BaseSyntheticEvent) => {
    if (e.target.checked && !selectedChildCheckboxes.includes(e.target.name)) {
      const checked = [...selectedChildCheckboxes, e.target.name];
      setSelectedChildCheckboxes(checked);
      if (checked.length === checkboxes.length) {
        setParentCheckbox({
          type: 'default',
          isChecked: true,
        });
        setSelected?.([header.name, ...checked]);
      } else if (checked.length) {
        setParentCheckbox({
          type: 'intermediate',
          isChecked: true,
        });
        setSelected?.(checked);
      }
    } else if (!e.target.checked && selectedChildCheckboxes.includes(e.target.name)) {
      const checked = selectedChildCheckboxes.filter((item) => item !== e.target.name);
      setSelectedChildCheckboxes(checked);
      setSelected?.(checked);
      if (checked.length) {
        setParentCheckbox({
          type: 'intermediate',
          isChecked: true,
        });
      } else {
        setParentCheckbox({
          type: 'default',
          isChecked: false,
        });
      }
    }
  };
  const handleParentChange = () => {
    if ((parentCheckbox.type === 'intermediate' && parentCheckbox.isChecked) || !parentCheckbox.isChecked) {
      const checked = checkboxes?.map((checkbox) => checkbox.name) || [];
      setSelectedChildCheckboxes(checked);
      setParentCheckbox({
        type: 'default',
        isChecked: true,
      });
      setSelected?.([header.name, ...checked]);
    } else {
      setParentCheckbox({
        type: 'intermediate',
        isChecked: false,
      });
      setSelectedChildCheckboxes([]);
      setSelected?.([]);
    }
  };

  return (
    <span className={classNames(className)}>
      <span className='block'>
        <Checkbox
          {...header}
          variation={variation}
          type={parentCheckbox.type as TCheckboxType}
          size={size}
          isChecked={parentCheckbox.isChecked}
          onChange={handleParentChange}
          horizontalPosition={horizontalPosition}
          verticalPosition={verticalPosition}
        />
      </span>
      <span className='block pt-1 pl-6'>
        {checkboxes?.map((item) => (
          <Checkbox
            key={item.name}
            {...item}
            variation={variation}
            size={size}
            isChecked={!!selectedChildCheckboxes.includes(item.name)}
            onChange={handleChildChange}
            className='pt-4'
            horizontalPosition={horizontalPosition}
            verticalPosition={verticalPosition}
          />
        ))}
      </span>
    </span>
  );
};

CheckboxGroup.defaultProps = {
  variation: 'default',
  size: 'default',
};
