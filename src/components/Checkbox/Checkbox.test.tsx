import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './index';
import getClassList from '../../utils/testUtils';

it('should render checkbox', () => {
  const children = 'Checkbox 01';
  render(
    <Checkbox fieldName="check01">
      {children}
    </Checkbox>
  );

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('rounded');
});

it('should render large checkbox', () => {
  const children = 'Checkbox 01';
  render(
    <Checkbox fieldName="check01" size="large">
      {children}
    </Checkbox>
  );

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-5');
  expect(iconClassName).toContain('rounded');
});

it('should render circle checkbox', () => {
  const children = 'Checkbox 02';
  render(
    <Checkbox fieldName="check02" variation="circle">
      {children}
    </Checkbox>
  );

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render large circle checkbox', () => {
  const children = 'Checkbox 02';
  render(
    <Checkbox fieldName="check02" variation="circle" size="large">
      {children}
    </Checkbox>
  );

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-5');
  expect(iconClassName).toContain('rounded-2xl');
});

it('should render checkbox with error', () => {
  const children = 'Checkbox 03';
  render(
    <Checkbox fieldName="check03" errorMessage="Error!">
      {children}
    </Checkbox>
  );

  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();

  const iconClassName = getClassList(screen.queryByText(children)?.previousSibling as HTMLElement);

  expect(iconClassName).toContain('w-4');
  expect(iconClassName).toContain('border-error');
  expect(iconClassName).toContain('rounded');
});