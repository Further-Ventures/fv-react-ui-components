import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './index';
import Button from '../Button';
import { defaultTheme } from './defaultTheme';

it('should render the child', () => {
  const label = 'Button';
  render(
    <ThemeProvider theme={defaultTheme}>
      <Button label={label} />
    </ThemeProvider>
  );
  expect(screen.queryByText(label)).toBeInTheDocument();
});
