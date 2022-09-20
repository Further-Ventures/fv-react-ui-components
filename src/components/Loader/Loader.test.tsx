import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Loader } from './';

it('should render circular rounded loader variant', () => {
  render(<Loader />);

  waitFor(
    () => {
      const loader = screen.queryByTestId('@fv/Loader-loader');
      const circle = screen.queryByTestId('@fv/Loader-circle');

      expect(loader?.className).toContain('w-12');
      expect(loader?.className).toContain('h-12');

      expect(circle?.className).toContain('circular-path-rounded-loader');
      expect(circle?.className).toContain('partialPathFill');
    },
    { timeout: 1000 }
  );
});

it('should render circular flat loader variant', () => {
  render(<Loader flat={true} />);

  waitFor(
    () => {
      const loader = screen.queryByTestId('@fv/Loader-loader');
      const circle = screen.queryByTestId('@fv/Loader-circle');

      expect(loader?.className).toContain('w-12');
      expect(loader?.className).toContain('h-12');

      expect(circle?.className).toContain('circular-path-loader');
      expect(circle?.className).toContain('partialPathFill');
    },
    { timeout: 1000 }
  );
});

it('should render circular flat progress variant', () => {
  render(<Loader flat={true} progress={55} />);

  waitFor(
    () => {
      const loader = screen.queryByTestId('@fv/Loader-loader');
      const circle = screen.queryByTestId('@fv/Loader-circle');

      expect(loader?.className).toContain('w-12');
      expect(loader?.className).toContain('h-12');

      expect(circle?.style).toContain('dasharray');
      expect(circle?.style).toContain('dashoffset');
    },
    { timeout: 1000 }
  );
});

it('should render bar flat loader variant', () => {
  render(<Loader variant='bar' />);

  waitFor(
    () => {
      const loader = screen.queryByTestId('@fv/Loader-loader');
      const progressLine = screen.queryByTestId('@fv/Loader-progressLine');

      expect(loader?.className).toContain('w-60');
      expect(loader?.className).toContain('h-1');

      expect(progressLine?.className).toContain('line-path-loader');
      expect(progressLine?.className).toContain('partialLineFill');
    },
    { timeout: 1000 }
  );
});
it('should render bar rounded loader variant', () => {
  render(<Loader variant='bar' />);

  waitFor(
    () => {
      const loader = screen.queryByTestId('@fv/Loader-loader');
      const progressLine = screen.queryByTestId('@fv/Loader-progressLine');

      expect(loader?.className).toContain('w-60');
      expect(loader?.className).toContain('h-1');

      expect(progressLine?.className).toContain('line-path-loader');
      expect(progressLine?.className).toContain('partialLineFill');
    },
    { timeout: 1000 }
  );
});

it('should render bar rounded loader variant', () => {
  render(<Loader variant='bar' progress={23} />);

  waitFor(
    () => {
      const loader = screen.queryByTestId('@fv/Loader-loader');
      const progressLine = screen.queryByTestId('@fv/Loader-progressLine');

      expect(loader?.className).toContain('w-60');
      expect(loader?.className).toContain('h-1');

      expect(progressLine?.style).toContain('dasharray');
      expect(progressLine?.style).toContain('dashoffset');
    },
    { timeout: 1000 }
  );
});
