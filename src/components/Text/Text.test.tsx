import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Text from './index'

it('should render paragraph', () => {
  const children = 'Text test';
  render(<Text tag="p">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(p)/i);
});

it('should render div', () => {
  const children = 'Text test';
  render(<Text tag="div">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(div)/i);
});

it('should render span', () => {
  const children = 'Text test';
  render(<Text tag="span">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(span)/i);
});

it('should render q', () => {
  const children = 'Text test';
  render(<Text tag="q">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(q)/i);
});

it('should render h1', () => {
  const children = 'Text test';
  render(<Text tag="h1">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h1)/i);
});

it('should render h2', () => {
  const children = 'Text test';
  render(<Text tag="h2">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h2)/i);
});

it('should render h3', () => {
  const children = 'Text test';
  render(<Text tag="h3">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h3)/i);
});

it('should render h4', () => {
  const children = 'Text test';
  render(<Text tag="h4">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h4)/i);
});

it('should render h5', () => {
  const children = 'Text test';
  render(<Text tag="h5">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h5)/i);
});

it('should render h6', () => {
  const children = 'Text test';
  render(<Text tag="h6">{children}</Text>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h6)/i);
});
