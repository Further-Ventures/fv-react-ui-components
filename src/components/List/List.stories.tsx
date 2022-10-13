import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './index';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import './stories.scss';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    pkg,
  },
  argTypes: {
    ...buildExcludeArgTypes(['onSelect', 'control', 'onItemSelect']),
  },
} as ComponentMeta<typeof List>;

const TemplateDefault: ComponentStory<typeof List> = (args) => {
  const [selected, setSelected] = useState(args.items.find((item) => item.isChecked)?.id);
  const onItemSelect = (itemId) => {
    setSelected(itemId);
  };

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List {...args} items={args.items.map((item) => ({ ...item, isChecked: item.id === selected }))} onItemSelect={onItemSelect} />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected}
      </div>
    </div>
  );
};

export const Default = TemplateDefault.bind({});

Default.args = {
  control: 'default',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      content: 'Default option',
      id: 'item1',
    },
    {
      content: 'Selected option',
      id: 'item2',
      isChecked: true,
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

const TemplateLeftIcon: ComponentStory<typeof List> = (args) => {
  const [selected, setSelected] = useState(args.items.find((item) => item.isChecked)?.id);
  const onItemSelect = (itemId) => {
    setSelected(itemId);
  };

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List {...args} onItemSelect={onItemSelect} items={args.items.map((item) => ({ ...item, isChecked: selected === item.id }))} />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected}
      </div>
    </div>
  );
};

export const WithLeftIcon = TemplateLeftIcon.bind({});

WithLeftIcon.args = {
  control: 'default',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      content: 'Default option',
      id: 'item1',
      iconLeft: {
        name: 'home',
      },
    },
    {
      content: 'Disabled option',
      id: 'item2',
      iconLeft: {
        name: 'person',
      },
      disabled: true,
    },
    {
      content: 'Selected option',
      id: 'item3',
      iconLeft: {
        name: 'settings',
      },
      isChecked: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
      iconLeft: {
        name: 'person',
      },
    },
  ],
};

const TemplateCheckbox: ComponentStory<typeof List> = (args) => {
  const { control, ...rest } = args;
  const [selected, setSelected] = useState(args.items.filter((item) => item.isChecked).map((item) => item.id));
  const onItemSelect = (itemId) => {
    if (selected.includes(itemId)) {
      setSelected(selected.filter((id) => id != itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };
  useEffect(() => {
    console.log('selected', selected);
  }, [selected]);

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List
          {...rest}
          control='checkbox'
          onItemSelect={onItemSelect}
          items={args.items.map((item) => ({ ...item, isChecked: selected.includes(item.id) }))}
        />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected.join(', ')}
      </div>
    </div>
  );
};

export const WithCheckbox = TemplateCheckbox.bind({});

WithCheckbox.args = {
  control: 'checkbox',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      content: 'Default checkbok option',
      id: 'item1',
    },
    {
      content: 'Disabled checkbox option',
      id: 'item2',
      disabled: true,
    },
    {
      content: 'Selected checkbox option',
      id: 'item3',
      isChecked: true,
    },
    {
      content: 'A fairly long checkbox option to show',
      id: 'item4',
    },
  ],
};

const TemplateCheckmark: ComponentStory<typeof List> = (args) => {
  const { control, ...rest } = args;
  const [selected, setSelected] = useState(args.items.filter((item) => item.isChecked).map((item) => item.id));
  const onItemSelect = (itemId) => {
    if (selected.includes(itemId)) {
      setSelected(selected.filter((id) => id != itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };
  useEffect(() => {
    console.log('selected', selected);
  }, [selected]);

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List
          {...rest}
          control='checkmark'
          onItemSelect={onItemSelect}
          items={args.items.map((item) => ({ ...item, isChecked: selected.includes(item.id) }))}
        />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected.join(', ')}
      </div>
    </div>
  );
};

export const WithCheckmark = TemplateCheckmark.bind({});

WithCheckmark.args = {
  control: 'checkmark',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      content: 'Default option',
      id: 'item1',
    },
    {
      content: 'Disabled option',
      id: 'item2',
      disabled: true,
    },
    {
      content: 'Selected option',
      id: 'item3',
      isChecked: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
  ],
};

const TemplateLeftIconAndCheckmark: ComponentStory<typeof List> = (args) => {
  const { control, ...rest } = args;
  const [selected, setSelected] = useState(args.items.filter((item) => item.isChecked).map((item) => item.id));
  const onItemSelect = (itemId) => {
    if (selected.includes(itemId)) {
      setSelected(selected.filter((id) => id != itemId));
    } else {
      setSelected([...selected, itemId]);
    }
  };
  useEffect(() => {
    console.log('selected', selected);
  }, [selected]);

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List
          {...rest}
          control='checkmark'
          onItemSelect={onItemSelect}
          items={args.items.map((item) => ({ ...item, isChecked: selected.includes(item.id) }))}
        />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected.join(', ')}
      </div>
    </div>
  );
};

export const WithLeftIconAndCheckmark = TemplateLeftIconAndCheckmark.bind({});

WithLeftIconAndCheckmark.args = {
  control: 'checkmark',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      content: 'Default option',
      id: 'item1',
      iconLeft: {
        name: 'home',
      },
    },
    {
      content: 'Disabled option',
      id: 'item2',
      iconLeft: {
        name: 'person',
      },
      disabled: true,
    },
    {
      content: 'Selected option',
      id: 'item3',
      iconLeft: {
        name: 'settings',
      },
      isChecked: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
      iconLeft: {
        name: 'person',
      },
    },
  ],
};

const TemplateListItems: ComponentStory<typeof List> = (args) => {
  const [selected, setSelected] = useState(args.items.find((item) => item.isChecked)?.id);
  const onItemSelect = (itemId) => {
    setSelected(itemId);
  };

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List
          {...args}
          control='listItems'
          onItemSelect={onItemSelect}
          items={args.items.map((item) => ({ ...item, isChecked: selected === item.id }))}
        />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected}
      </div>
    </div>
  );
};

export const ListItems = TemplateListItems.bind({});

ListItems.args = {
  control: 'default',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      content: 'Default option',
      id: 'item1',
    },
    {
      content: 'Disabled option',
      id: 'item2',
      disabled: true,
    },
    {
      content: 'Selected option',
      id: 'item3',
      isChecked: true,
    },
    {
      content: 'An option with a fairly long text to show',
      id: 'item4',
    },
  ],
};

const TemplateWithLabel: ComponentStory<typeof List> = (args) => {
  const [selected, setSelected] = useState(args.items.find((item) => item.isChecked)?.id);
  const onItemSelect = (itemId) => {
    setSelected(itemId);
  };

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List {...args} onItemSelect={onItemSelect} items={args.items.map((item) => ({ ...item, isChecked: selected === item.id }))} />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected}
      </div>
    </div>
  );
};

export const WithLabel = TemplateWithLabel.bind({});

WithLabel.args = {
  control: 'default',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      id: 'item1',
      label: 'Default Label',
      content: 'Default option',
      isChecked: true,
    },
    {
      id: 'item2',
      label: 'Disabled label',
      content: 'Disabled option',
      disabled: true,
    },
    {
      id: 'item3',
      label: 'Label text with left icon',
      content: 'Content text with left icon',
      iconLeft: {
        name: 'account_circle',
      },
    },
    {
      id: 'item4',
      label: 'Label text with left and right icon',
      content: 'Content text with left and right icon',
      iconLeft: {
        name: 'account_circle',
      },
      iconRight: {
        name: 'arrow_drop_up',
        color: 'text-hint',
      },
    },
    {
      id: 'item5',
      label: 'Disabled label text with left and right icon',
      content: 'Disabled content text with left and right icon',
      iconLeft: {
        name: 'account_circle',
      },
      iconRight: {
        name: 'arrow_drop_up',
        color: 'text-hint',
      },
      disabled: true,
    },
  ],
};

const TemplateWithSubtext: ComponentStory<typeof List> = (args) => {
  const [selected, setSelected] = useState(args.items.find((item) => item.isChecked)?.id);
  const onItemSelect = (itemId) => {
    setSelected(itemId);
  };

  return (
    <div className='p-5 bg-[#f5f5f5]'>
      <div className='flex justify-around'>
        <List {...args} onItemSelect={onItemSelect} items={args.items.map((item) => ({ ...item, isChecked: selected === item.id }))} />
      </div>
      <div className='mt-5'>
        <strong>selected:</strong> {selected}
      </div>
    </div>
  );
};

export const WithSubtext = TemplateWithSubtext.bind({});

WithSubtext.args = {
  control: 'default',
  width: 'medium',
  variant: 'thick',
  items: [
    {
      id: 'item1',
      content: 'Default option',
      subtext: 'Default subtext',
      isChecked: true,
    },
    {
      id: 'item2',
      subtext: 'Disabled subtext',
      content: 'Disabled option',
      disabled: true,
    },
    {
      id: 'item3',
      subtext: 'Subtext text with left icon',
      content: 'Content text with left icon',
      iconLeft: {
        name: 'account_circle',
        fill: true,
      },
    },
    {
      id: 'item4',
      subtext: 'Subtext text with left and right icon',
      content: 'Content text with left and right icon',
      iconLeft: {
        name: 'account_circle',
      },
      iconRight: {
        name: 'arrow_drop_up',
        color: 'text-hint',
      },
    },
    {
      id: 'item5',
      subtext: 'Disabled subtext text with left and right icon',
      content: 'Disabled content text with left and right icon',
      iconLeft: {
        name: 'account_circle',
      },
      iconRight: {
        name: 'arrow_drop_up',
        color: 'text-hint',
      },
      disabled: true,
    },
  ],
};
