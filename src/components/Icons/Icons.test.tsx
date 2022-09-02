import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Icons from './index';

it('should render an outlined person Icon of size 24', () => {
  const icon = 'person';
  render(<Icons icon={icon} />);

  const element = screen.queryByText(icon) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element.style.getPropertyValue('font-size')).toContain('24');
  expect(element?.className).not.toContain('fill');
});

it('should render an filled menu Icon of size 35', () => {
  const icon = 'menu';
  const fontSize = 35;
  render(<Icons icon={icon} fill={true} size={fontSize} />);

  const element = screen.queryByText(icon) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element.style.getPropertyValue('font-size')).toContain(`${fontSize}`);
  expect(element?.className).toContain('fill');
});
