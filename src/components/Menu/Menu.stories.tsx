import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import './stories.scss';
import Icons from '../Icons';
import { useScreenSize } from '../../hooks/useScreenSize';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['onSelect', 'onItemSelect', 'ref', 'className', 'isMobile', 'onVisibleChange', 'control']),
  },
} as ComponentMeta<typeof Menu>;

const TemplateDefault: ComponentStory<typeof Menu> = (args: any) => {
  console.log('typeof Menu', typeof Menu);
  const [selected, setSelected] = useState(args.items.find((item) => item.isChecked)?.content);
  const onSelect = (itemId) => {
    setSelected(itemId);
  };
  const isMobile = useScreenSize(1024);

  return (
    <div className='relative -m-4 h-[100vh] p-5 bg-[#f5f5f5]'>
      <div className={`inline-block absolute ${args.position}`}>
        <Menu
          {...args}
          isMobile={isMobile?.isMobile}
          items={args.items.map((item) => ({ ...item, isChecked: item.id === selected }))}
          onSelect={onSelect}
        >
          <span className='flex justify-center items-center w-10 h-10 rounded-lg shadow-extraLight bg-white'>
            <Icons icon='menu' color='primary' />
          </span>
        </Menu>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 mt-5'>
        <strong>selected id:</strong> {selected}
      </div>
    </div>
  );
};

export const MenuLeftTop = TemplateDefault.bind({});

MenuLeftTop.args = {
  width: 'medium',
  variant: 'thick',
  position: 'top-5 left-5',
  items: [
    {
      content: 'Option with Icon Left',
      id: 'item1',
      iconLeft: {
        name: 'person',
      },
    },
    {
      content: 'Selected option',
      id: 'item2',
    },
    {
      content: 'Disabled option',
      id: 'item3',
      disabled: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
    {
      content: 'Option 5',
      id: 'item5',
    },
    {
      content: 'Option 6',
      id: 'item6',
    },
    {
      content: 'Option 7',
      id: 'item7',
    },
  ],
};

export const MenuTopRight = TemplateDefault.bind({});

MenuTopRight.args = {
  width: 'medium',
  variant: 'thick',
  position: 'top-5 right-5',
  items: [
    {
      content: 'Option with Icon Left',
      id: 'item1',
      iconLeft: {
        name: 'person',
      },
    },
    {
      content: 'Selected option',
      id: 'item2',
    },
    {
      content: 'Disabled option',
      id: 'item3',
      disabled: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
    {
      content: 'Option 5',
      id: 'item5',
    },
    {
      content: 'Option 6',
      id: 'item6',
    },
    {
      content: 'Option 7',
      id: 'item7',
    },
  ],
};

export const MenuBottomLeft = TemplateDefault.bind({});

MenuBottomLeft.args = {
  width: 'medium',
  variant: 'thick',
  position: 'bottom-5 left-5',
  items: [
    {
      content: 'Option with Icon Left',
      id: 'item1',
      iconLeft: {
        name: 'person',
      },
    },
    {
      content: 'Selected option',
      id: 'item2',
    },
    {
      content: 'Disabled option',
      id: 'item3',
      disabled: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
    {
      content: 'Option 5',
      id: 'item5',
    },
    {
      content: 'Option 6',
      id: 'item6',
    },
    {
      content: 'Option 7',
      id: 'item7',
    },
  ],
};

export const MenuBottomRight = TemplateDefault.bind({});

MenuBottomRight.args = {
  width: 'medium',
  variant: 'thick',
  position: 'bottom-5 right-5',
  items: [
    {
      content: 'Option with Icon Left',
      id: 'item1',
      iconLeft: {
        name: 'person',
      },
    },
    {
      content: 'Selected option',
      id: 'item2',
    },
    {
      content: 'Disabled option',
      id: 'item3',
      disabled: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
    {
      content: 'Option 5',
      id: 'item5',
    },
    {
      content: 'Option 6',
      id: 'item6',
    },
    {
      content: 'Option 7',
      id: 'item7',
    },
  ],
};

export const CascadingMenu = TemplateDefault.bind({});

CascadingMenu.args = {
  width: 'medium',
  variant: 'thick',
  position: 'top-5 left-5',
  items: [
    {
      content: 'Option with Icon Left',
      id: 'item1',
      iconLeft: {
        name: 'person',
      },
    },
    {
      content: 'Selected option',
      id: 'item2',
      items: [
        {
          id: 'subitem1',
          content: 'Sub item 1',
        },
        {
          id: 'subitem2',
          content: 'Sub item 2',
        },
      ],
    },
    {
      content: 'Disabled option',
      id: 'item3',
      disabled: true,
      items: [
        {
          id: 'subitem3',
          content: 'Sub item 3',
        },
        {
          id: 'subitem4',
          content: 'Sub item 4',
        },
      ],
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
      items: [
        {
          id: 'subitem5',
          content: 'Sub item 5',
        },
        {
          id: 'subitem6',
          content: 'Sub item 6',
        },
        {
          id: 'subitem7',
          content: 'Sub item 7',
        },
        {
          id: 'subitem8',
          content: 'Sub item 8',
        },
      ],
    },
  ],
};

const TemplateMultiple: ComponentStory<typeof Menu> = (args: any) => {
  const [selected, setSelected] = useState(args.items.filter((item) => item.isChecked).map((item) => item.id));
  const onSelect = (itemId) => {
    if (selected.includes(itemId)) {
      setSelected(selected.filter((id) => id != itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };
  useEffect(() => {
    console.log('selected', selected);
  }, [selected]);
  const isMobile = useScreenSize(1024);

  return (
    <div className='relative -m-4 h-[100vh] p-5 bg-[#f5f5f5]'>
      <div className={`inline-block absolute ${args.position}`}>
        <Menu
          {...args}
          isMobile={isMobile?.isMobile}
          items={args.items.map((item) => {
            const items = item?.items?.map((sitem) => ({ ...sitem, isChecked: selected.includes(sitem.id) }));
            return { ...item, items, isChecked: selected.includes(item.id) };
          })}
          onSelect={onSelect}
        >
          <span className='flex justify-center items-center w-10 h-10 rounded-lg shadow-extraLight bg-white'>
            <Icons icon='menu' color='primary' />
          </span>
        </Menu>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 mt-5'>
        <strong>selected id:</strong> {selected.join(', ')}
      </div>
    </div>
  );
};

export const MultipleCheckbox = TemplateMultiple.bind({});

MultipleCheckbox.args = {
  width: 'medium',
  variant: 'thick',
  control: 'checkbox',
  position: 'top-5 left-5',
  items: [
    {
      content: 'Option with Icon Left',
      id: 'item1',
    },
    {
      content: 'Selected option',
      id: 'item2',
      items: [
        {
          id: 'subitem1',
          content: 'Sub item 1',
        },
        {
          id: 'subitem2',
          content: 'Sub item 2',
        },
      ],
    },
    {
      content: 'Disabled option',
      id: 'item3',
      disabled: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
  ],
};

export const MultipleCheckmark = TemplateMultiple.bind({});

MultipleCheckmark.args = {
  width: 'medium',
  variant: 'thick',
  control: 'checkmark',
  position: 'top-5 left-5',
  items: [
    {
      content: 'Option with Icon Left',
      id: 'item1',
    },
    {
      content: 'Selected option',
      id: 'item2',
      items: [
        {
          id: 'subitem1',
          content: 'Sub item 1',
        },
        {
          id: 'subitem2',
          content: 'Sub item 2',
        },
      ],
    },
    {
      content: 'Disabled option',
      id: 'item3',
      disabled: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
  ],
};
