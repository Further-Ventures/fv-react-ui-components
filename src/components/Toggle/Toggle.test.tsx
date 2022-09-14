import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from './';

const mockOnToggle = jest.fn();

it('should render large active toggle', () => {
  const children = 'Hey! Toggle me!';
  render(
    <Toggle isActive={true} onToggle={mockOnToggle}>
      {children}
    </Toggle>
  );

  const toggleBackground = screen.queryByTestId('@fv/Toggle-toggleBackground');
  expect(toggleBackground?.className).toContain('bg-primary'); // active
  expect(toggleBackground?.className).toContain('w-11'); // large

  expect(screen.queryByTestId('@fv/Toggle-toggleCircle')?.className).toContain('left-5'); // active
});
it('should render small active toggle', () => {
  const children = 'Hey! Toggle me!';
  render(
    <Toggle isActive={true} onToggle={mockOnToggle} size='small'>
      {children}
    </Toggle>
  );

  const toggleBackground = screen.queryByTestId('@fv/Toggle-toggleBackground');
  expect(toggleBackground?.className).toContain('bg-primary'); // active
  expect(toggleBackground?.className).toContain('w-[1.8125rem]'); // small

  expect(screen.queryByTestId('@fv/Toggle-toggleCircle')?.className).toContain('left-3'); // active
});

it('should render and toggle', () => {
  const children = 'Hey! Toggle me!';
  render(
    <Toggle isActive={true} onToggle={mockOnToggle}>
      {children}
    </Toggle>
  );

  const toggleBackground = screen.queryByTestId('@fv/Toggle-toggleBackground');
  expect(toggleBackground?.className).toContain('bg-primary'); // active
  expect(toggleBackground?.className).toContain('w-11'); // large

  expect(screen.queryByTestId('@fv/Toggle-toggleCircle')?.className).toContain('left-5'); // active

  const toggleButton = screen.queryByTestId('@fv/Toggle-toggleButton') as HTMLElement;
  fireEvent.click(toggleButton);

  expect(mockOnToggle).toBeCalled();
});

it('should render large inactive toggle', () => {
  const children = 'Hey! Toggle me!';
  render(
    <Toggle isActive={false} onToggle={mockOnToggle}>
      {children}
    </Toggle>
  );

  const toggleBackground = screen.queryByTestId('@fv/Toggle-toggleBackground');

  expect(toggleBackground?.className).toContain('bg-default-light'); // inactive
  expect(toggleBackground?.className).toContain('w-11'); // large

  expect(screen.queryByTestId('@fv/Toggle-toggleCircle')?.className).toContain('left-0'); // inactive
});
it('should render small inactive toggle', () => {
  const children = 'Hey! Toggle me!';
  render(
    <Toggle isActive={false} onToggle={mockOnToggle} size='small'>
      {children}
    </Toggle>
  );

  const toggleBackground = screen.queryByTestId('@fv/Toggle-toggleBackground');

  expect(toggleBackground?.className).toContain('bg-default-light'); // inactive
  expect(toggleBackground?.className).toContain('w-[1.8125rem]'); // small

  expect(screen.queryByTestId('@fv/Toggle-toggleCircle')?.className).toContain('left-0'); // inactive
});

it('should render large disabled toggle', () => {
  const children = 'Hey! Toggle me!';
  render(
    <Toggle isActive={false} onToggle={mockOnToggle} disabled={true}>
      {children}
    </Toggle>
  );

  const toggleBackground = screen.queryByTestId('@fv/Toggle-toggleBackground');

  expect(toggleBackground?.className).not.toContain('bg-default-light'); // disabled
  expect(toggleBackground?.className).toContain('bg-default'); // disabled
  expect(toggleBackground?.className).toContain('w-11'); // large
});
it('should render small disabled toggle', () => {
  const children = 'Hey! Toggle me!';
  render(
    <Toggle isActive={false} onToggle={mockOnToggle} size='small' disabled={true}>
      {children}
    </Toggle>
  );

  const toggleBackground = screen.queryByTestId('@fv/Toggle-toggleBackground');

  expect(toggleBackground?.className).not.toContain('bg-default-light'); // disabled
  expect(toggleBackground?.className).toContain('bg-default'); // disabled
  expect(toggleBackground?.className).toContain('w-[1.8125rem]'); // small
});
