import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Heading } from './index'


it('should be rendered as h1', () => {
  const children = 'Test heading';
  render(<Heading variation="h1">{children}</Heading>)
  
  expect(screen.queryByText(children)).toBeInTheDocument();
});

it('should render bold h2', () => {
  const children = 'Test heading';
  render(<Heading variation="h2">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(bold)/i);
});

it('should render bold h3', () => {
  const children = 'Test heading';
  render(<Heading variation="h3">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(bold)/i);
});

it('should render bold h4', () => {
  const children = 'Test heading';
  render(<Heading variation="h4">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(bold)/i);
});

it('should render slanted h4', () => {
  const children = 'Test heading';
  render(<Heading variation="h4-slanted">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(slanted)/i);
});

it('should render regular h5', () => {
  const children = 'Test heading';
  render(<Heading variation="h5-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(regular)/i);
});
it('should render thin h5', () => {
  const children = 'Test heading';
  render(<Heading variation="h5-thin">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(thin)/i);
});

it('should render bold h6', () => {
  const children = 'Test heading';
  render(<Heading variation="h6">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(bold)/i);
});
it('should render medium h6', () => {
  const children = 'Test heading';
  render(<Heading variation="h6-medium">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(medium)/i);
});
it('should render regular h6', () => {
  const children = 'Test heading';
  render(<Heading variation="h6-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.className).toMatch(/(regular)/i);
});