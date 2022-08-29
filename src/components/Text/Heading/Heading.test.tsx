import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Heading } from './index'

let mockIsMobile = false;
jest.mock('../../../hooks/useScreenSize', () =>({
  useScreenSize: () => ({
    isMobile: mockIsMobile
  })
}));


/* 
    desktop tests
*/
it('should be rendered as bold h1', () => {
  const children = 'Test heading';
  render(<Heading tag="h1">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});

it('should be rendered as bold h2', () => {
  const children = 'Test heading';
  render(<Heading tag="h2">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});

it('should be rendered as bold h3', () => {
  const children = 'Test heading';
  render(<Heading tag="h3">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});


it('should be rendered as bold h4', () => {
  const children = 'Test heading';
  render(<Heading tag="h4">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});
it('should be rendered as bold slanted h4', () => {
  const children = 'Test heading';
  render(<Heading tag="h4" fontStyle="italic">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);
  
  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});

it('should be rendered as regular h5', () => {
  const children = 'Test heading';
  render(<Heading tag="h5" fontWeight={400}>{children}</Heading>)

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h5)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('400');
});
it('should be rendered as thin h5', () => {
  const children = 'Test heading';
  render(<Heading tag="h5" fontWeight={200}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h5)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('200');
});

it('should be rendered as bold h6', () => {
  const children = 'Test heading';
  render(<Heading tag="h6">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h6)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});
it('should be rendered as medium h6', () => {
  const children = 'Test heading';
  render(<Heading tag="h6" fontWeight={500}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h6)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('500');
});
it('should be rendered as regular h6', () => {
  const children = 'Test heading';
  render(<Heading tag="h6" fontWeight={400}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h6)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('400');
});

it('should be rendered as subline', () => {
  const children = 'Test heading';
  render(<Heading tag="subline" fontWeight={500}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('500');
});


// /* 
//     mobile tests
// */
it('should be rendered as bold h1 on mobile', () => {
  mockIsMobile = true;
  const children = 'Test heading';
  render(<Heading tag="h1">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});
it('should be rendered as medium h1 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h1" fontWeight={500}>{children}</Heading>)

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('500');
});
it('should be rendered as regular h1 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h1" fontWeight={400}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h1)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('400');
});

it('should be rendered as bold h2 on mobile', () => {
  mockIsMobile = true;
  const children = 'Test heading';
  render(<Heading tag="h2">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});
it('should be rendered as medium h2 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h2" fontWeight={500}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('500');
});
it('should be rendered as regular h2 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h2" fontWeight={400}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h2)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('400');
});

it('should be rendered as bold h3 on mobile', () => {
  mockIsMobile = true;
  const children = 'Test heading';
  render(<Heading tag="h3">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});
it('should be rendered as medium h3 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h3" fontWeight={500}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('500');
});
it('should be rendered as regular h3 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h3" fontWeight={400}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h3)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('400');
});

it('should be rendered as bold h4 on mobile', () => {
  mockIsMobile = true;
  const children = 'Test heading';
  render(<Heading tag="h4">{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('700');
});
it('should be rendered as medium h4 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h4" fontWeight={500}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('500');
});
it('should be rendered as regular h4 on mobile', () => {
  const children = 'Test heading';
  render(<Heading tag="h4" fontWeight={400}>{children}</Heading>)  

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(h4)/i);

  expect(window.getComputedStyle(element).getPropertyValue('font-weight')).toContain('400');
});