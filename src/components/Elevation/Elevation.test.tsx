import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Elevation } from './index';

it('should render medium shadow', () => {
  const children = 'Text Link';
  render(<Elevation>{children}</Elevation>);

  const elements = document.getElementsByTagName('div') as HTMLCollection;
  expect(elements[1].className).toContain('shadow-medium');
});
it('should render medium shadow', () => {
  const children = 'Text Link';
  render(<Elevation>{children}</Elevation>);

  const elements = document.getElementsByTagName('div') as HTMLCollection;
  expect(elements[1].className).toContain('shadow-medium');
});
it('should render medium shadow', () => {
  const children = 'Text Link';
  render(<Elevation>{children}</Elevation>);

  const elements = document.getElementsByTagName('div') as HTMLCollection;
  expect(elements[1].className).toContain('shadow-medium');
});
it('should render extraLight shadow', () => {
  const children = 'Text Link';
  render(<Elevation variation='extraLight'>{children}</Elevation>);

  const elements = document.getElementsByTagName('div') as HTMLCollection;
  expect(elements[1].className).toContain('shadow-extraLight');
});
it('should render light shadow', () => {
  const children = 'Text Link';
  render(<Elevation variation='light'>{children}</Elevation>);

  const elements = document.getElementsByTagName('div') as HTMLCollection;
  expect(elements[1].className).toContain('shadow-light');
});
it('should render heavy shadow', () => {
  const children = 'Text Link';
  render(<Elevation variation='heavy'>{children}</Elevation>);

  const elements = document.getElementsByTagName('div') as HTMLCollection;
  expect(elements[1].className).toContain('shadow-heavy');
});
it('should render extraHeavy shadow', () => {
  const children = 'Text Link';
  render(<Elevation variation='extraHeavy'>{children}</Elevation>);

  const elements = document.getElementsByTagName('div') as HTMLCollection;
  expect(elements[1].className).toContain('shadow-extraHeavy');
});
