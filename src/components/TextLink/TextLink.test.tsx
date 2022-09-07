import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import { TextLink } from './index';

it('should render default variant and no icon', () => {
  const children = 'Text Link';
  render(
    <TextLink to="https://google.com/">
      {children}
    </TextLink>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-base');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(1);
});

it('should render default variant and left icon', () => {
  const children = 'Text Link';
  render(
    <TextLink icon="left" to="https://google.com/">
      {children}
    </TextLink>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-base');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(3); // contains the icon as well (span inside span)
});

it('should render large variant', () => {
  const children = 'Text Link';
  render(
    <TextLink variation="large" to="https://google.com/">
      {children}
    </TextLink>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-base2');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(1);
});

it('should render description variant', () => {
  const children = 'Text Link';
  render(
    <TextLink variation="description" to="https://google.com/">
      {children}
    </TextLink>
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
    <TextLink variation="caption" to="https://google.com/">
      {children}
    </TextLink>
  );

  const iconWrapper = document.getElementsByTagName('a') as HTMLCollection;
  expect(iconWrapper[0].className).toContain('text-xs');

  const spans = document.getElementsByTagName('span') as HTMLCollection;
  expect(spans.length).toBe(1);
});