import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './index';

it('should rendered h1 desktop', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h1-bold-desktop'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-7xl');
});
it('should rendered h1 bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h1-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-4xl');
});
it('should rendered h1 medium', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h1-medium'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-4xl');
});
it('should rendered h1 regular', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h1-regular'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(element.className).toContain('text-4xl');
});

it('should rendered h2 desktop', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h2-bold-desktop'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-6xl');
});
it('should rendered h2 bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h2-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-xl');
});
it('should rendered h2 medium', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h2-medium'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-xl');
});
it('should rendered h2 regular', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h2-regular'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(element.className).toContain('text-xl');
});

it('should rendered h3 desktop', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h3-bold-desktop'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-5xl');
});
it('should rendered h3 bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h3-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-lg');
});
it('should rendered h3 medium', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h3-medium'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-lg');
});
it('should rendered h3 regular', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h3-regular'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(element.className).toContain('text-lg');
});

it('should rendered h4 desktop', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h4-bold-desktop'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-3xl');
});
it('should rendered h4 slanted desktop', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h4-bold-slanted-desktop'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('italic');
  expect(element.className).toContain('text-3xl');
});
it('should rendered h4 bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h4-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-base3');
});
it('should rendered h4 medium', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h4-medium'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-base3');
});
it('should rendered h4 regular', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h4-regular'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(element.className).toContain('text-base3');
});

it('should rendered h5 regular desktop', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h5-regular-desktop'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h5)/i);

  expect(element.className).toContain('text-3xl');
});
it('should rendered h5 thin desktop', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='h5-thin-desktop'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h5)/i);

  expect(element.className).toContain('font-extralight');
  expect(element.className).toContain('text-3xl');
});

it('should rendered subline', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='subline'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-lg');
});

it('should rendered quote', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='quote'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(q)/i);

  expect(element.className).toContain('text-2xl');
  expect(element.className).toContain('italic');
});

it('should rendered p1 bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='p1-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-base2');
  expect(element.className).toContain('font-bold');
});

it('should rendered p1 medium', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='p1-medium'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-base2');
  expect(element.className).toContain('font-medium');
});

it('should rendered p1 regular', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='p1-regular'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-base2');
});

it('should rendered p2 bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='p2-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-base');
  expect(element.className).toContain('font-bold');
});
it('should rendered p2 medium', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='p2-medium'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-base');
  expect(element.className).toContain('font-medium');
});
it('should rendered p2 regular', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='p2-regular'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-base');
});

it('should rendered description bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='description-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-xs');
  expect(element.className).toContain('font-bold');
});
it('should rendered description medium', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='description-medium'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('text-xs');
  expect(element.className).toContain('font-medium');
});

it('should rendered caption', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='caption'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('text-xs');
});

it('should rendered small', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='small'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(small)/i);

  expect(element.className).toContain('text-xxs');
});

it('should rendered button small', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='button-small'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('text-xxs');
  expect(element.className).toContain('font-medium');
});
it('should rendered button', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='button'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('text-sm');
  expect(element.className).toContain('font-medium');
});

it('should rendered label', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='label'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(label)/i);

  expect(element.className).toContain('text-sm');
});
it('should rendered label bold', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<Text variation='label-bold'>{children}</Text>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(label)/i);

  expect(element.className).toContain('text-sm');
  expect(element.className).toContain('font-bold');
});

it('should rendered div', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <Text variation='div' weight='extralight' color='primary'>
      {children}
    </Text>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(div)/i);

  expect(element.className).toContain('text-primary');
  expect(element.className).toContain('font-extralight');
});
