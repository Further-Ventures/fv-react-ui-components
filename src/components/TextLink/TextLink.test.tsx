import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import { TextLink } from './index';
import { BrowserRouter } from 'react-router-dom';

it('should render default variant and no icon', () => {
  const children = 'Text Link';
  render(
    <BrowserRouter>
      <TextLink to="https://google.com/">
        {children}
      </TextLink>
    </BrowserRouter>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-base');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(1);
});

it('should render default variant and left icon', () => {
  const children = 'Text Link';
  render(
    <BrowserRouter>
      <TextLink icon="left" to="https://google.com/">
        {children}
      </TextLink>
    </BrowserRouter>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-base');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(3); // contains the icon as well (span inside span)
});

it('should render large variant', () => {
  const children = 'Text Link';
  render(
    <BrowserRouter>
      <TextLink variation="large" to="https://google.com/">
        {children}
      </TextLink>
    </BrowserRouter>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-base2');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(1);
});

it('should render description variant', () => {
  const children = 'Text Link';
  render(
    <BrowserRouter>
      <TextLink variation="description" to="https://google.com/">
        {children}
      </TextLink>
    </BrowserRouter>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-xs');
  expect(iconWrapper[0].className).toContain('font-medium');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(1);
});

it('should render caption variant', () => {
  const children = 'Text Link';
  render(
    <BrowserRouter>
      <TextLink variation="caption" to="https://google.com/">
        {children}
      </TextLink>
    </BrowserRouter>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-xs');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(1);
});