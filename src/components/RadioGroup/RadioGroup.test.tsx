import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Radio } from '../Radio';
import getClassList from '../../utils/testUtils';

it('should render radio button', () => {
  const children = 'Radio 01';
  render(<Radio name='check01'>{children}</Radio>);

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render large radio button', () => {
  const children = 'Radio 02';
  render(
    <Radio name='check02' size='large'>
      {children}
    </Radio>
  );

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-5');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render radio with error', () => {
  const children = 'Radio 03';
  render(
    <Radio name='radio03' error='error'>
      {children}
    </Radio>
  );

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('border-error');
  expect(iconClassName).toContain('rounded-2xl');
});