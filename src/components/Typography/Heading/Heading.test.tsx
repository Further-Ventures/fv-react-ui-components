import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Heading } from './index'


it('should be rendered as h1', () => {
  const children = 'Test heading';
  render(<Heading variation="h1">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as mobile h1', () => {
  const children = 'Test heading';
  render(<Heading variation="h1-mobile">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as mobile h1 medium', () => {
  const children = 'Test heading';
  render(<Heading variation="h1-mobile-medium">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);
  expect(element?.style.fontWeight).toContain("500");
});
it('should be rendered as mobile h1 regular', () => {
  const children = 'Test heading';
  render(<Heading variation="h1-mobile-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);
  expect(element?.style.fontWeight).toContain("400");
});


it('should be rendered as h2', () => {
  const children = 'Test heading';
  render(<Heading variation="h2">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as mobile h2', () => {
  const children = 'Test heading';
  render(<Heading variation="h2-mobile">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as mobile h2 medium', () => {
  const children = 'Test heading';
  render(<Heading variation="h2-mobile-medium">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);
  expect(element?.style.fontWeight).toContain("500");
});
it('should be rendered as mobile h2 regular', () => {
  const children = 'Test heading';
  render(<Heading variation="h2-mobile-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);
  expect(element?.style.fontWeight).toContain("400");
});


it('should be rendered as h3', () => {
  const children = 'Test heading';
  render(<Heading variation="h3">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as mobile h3', () => {
  const children = 'Test heading';
  render(<Heading variation="h3-mobile">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as mobile h3 medium', () => {
  const children = 'Test heading';
  render(<Heading variation="h3-mobile-medium">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);
  expect(element?.style.fontWeight).toContain("500");
});
it('should be rendered as mobile h3 regular', () => {
  const children = 'Test heading';
  render(<Heading variation="h3-mobile-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);
  expect(element?.style.fontWeight).toContain("400");
});


it('should be rendered as h4', () => {
  const children = 'Test heading';
  render(<Heading variation="h4">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as h4 slanted', () => {
  const children = 'Test heading';
  render(<Heading variation="h4-slanted">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);
  expect(element?.style.fontWeight).toContain("700");
  expect(element?.style.fontStyle).toContain("italic");
});
it('should be rendered as mobile h4', () => {
  const children = 'Test heading';
  render(<Heading variation="h4-mobile">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as mobile h4 medium', () => {
  const children = 'Test heading';
  render(<Heading variation="h4-mobile-medium">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);
  expect(element?.style.fontWeight).toContain("500");
});
it('should be rendered as mobile h4 regular', () => {
  const children = 'Test heading';
  render(<Heading variation="h4-mobile-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);
  expect(element?.style.fontWeight).toContain("400");
});


it('should be rendered as h5 regular', () => {
  const children = 'Test heading';
  render(<Heading variation="h5-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h5)/i);
  expect(element?.style.fontWeight).toContain("400");
});
it('should be rendered as h5 thin', () => {
  const children = 'Test heading';
  render(<Heading variation="h5-thin">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h5)/i);
  expect(element?.style.fontWeight).toContain("200");
});

it('should be rendered as h6', () => {
  const children = 'Test heading';
  render(<Heading variation="h6">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h6)/i);
  expect(element?.style.fontWeight).toContain("700");
});
it('should be rendered as h6 medium', () => {
  const children = 'Test heading';
  render(<Heading variation="h6-medium">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h6)/i);
  expect(element?.style.fontWeight).toContain("500");
});
it('should be rendered as h6 regular', () => {
  const children = 'Test heading';
  render(<Heading variation="h6-regular">{children}</Heading>)
  
  const element = screen.queryByText(children);
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h6)/i);
  expect(element?.style.fontWeight).toContain("400");
});