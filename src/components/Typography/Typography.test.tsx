import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Typography from './index'

it('should render paragraph', () => {
  const children = 'Text test';
  render(<Typography tag="p">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(p)/i);
});

it('should render div', () => {
  const children = 'Text test';
  render(<Typography tag="div">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(div)/i);
});

it('should render span', () => {
  const children = 'Text test';
  render(<Typography tag="span">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(span)/i);
});

it('should render q', () => {
  const children = 'Text test';
  render(<Typography tag="q">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(q)/i);
});

it('should render h1', () => {
  const children = 'Text test';
  render(<Typography tag="h1">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h1)/i);
});

it('should render h2', () => {
  const children = 'Text test';
  render(<Typography tag="h2">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h2)/i);
});

it('should render h3', () => {
  const children = 'Text test';
  render(<Typography tag="h3">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h3)/i);
});

it('should render h4', () => {
  const children = 'Text test';
  render(<Typography tag="h4">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h4)/i);
});

it('should render h5', () => {
  const children = 'Text test';
  render(<Typography tag="h5">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h5)/i);
});

it('should render h6', () => {
  const children = 'Text test';
  render(<Typography tag="h6">{children}</Typography>)
  
  const element = screen.queryByText(children);
  expect(screen.queryByText(children)).toBeInTheDocument();
  expect(element?.tagName).toMatch(/(h6)/i);
});
