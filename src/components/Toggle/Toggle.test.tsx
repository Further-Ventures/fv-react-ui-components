import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Toggle from './';

const mockOnToggle = jest.fn();

it('should render large active toggle', () => {
  const label = 'Hey! Toggle me!';
  render(<Toggle isActive={true} onToggle={mockOnToggle} label={label} />);

  waitFor(
    () => {
      const toggleBackground = screen.queryByTestId('@fv/InputWithToggle-toggleBackground');
      expect(toggleBackground?.className).toContain('bg-primary'); // active
      expect(toggleBackground?.className).toContain('w-11'); // large

      expect(screen.queryByTestId('@fv/InputWithToggle-toggleCircle')?.className).toContain('left-5'); // active
    },
    { timeout: 100 }
  );
});
it('should render small active toggle', () => {
  const label = 'Hey! Toggle me!';
  render(<Toggle isActive={true} onToggle={mockOnToggle} size='small' label={label} />);

  waitFor(
    () => {
      const toggleBackground = screen.queryByTestId('@fv/InputWithToggle-toggleBackground');
      expect(toggleBackground?.className).toContain('bg-primary'); // active
      expect(toggleBackground?.className).toContain('w-[1.8125rem]'); // small

      expect(screen.queryByTestId('@fv/InputWithToggle-toggleCircle')?.className).toContain('left-3'); // active
    },
    { timeout: 100 }
  );
});

it('should render and toggle', () => {
  const label = 'Hey! Toggle me!';
  render(<Toggle isActive={true} onToggle={mockOnToggle} label={label} />);

  waitFor(
    () => {
      const toggleBackground = screen.queryByTestId('@fv/InputWithToggle-toggleBackground');
      expect(toggleBackground?.className).toContain('bg-primary'); // active
      expect(toggleBackground?.className).toContain('w-11'); // large

      expect(screen.queryByTestId('@fv/InputWithToggle-toggleCircle')?.className).toContain('left-5'); // active

      const input = screen.queryByTestId('@fv/InputWithToggle-label') as HTMLElement;
      fireEvent.click(input);

      expect(mockOnToggle).toBeCalled();
    },
    { timeout: 100 }
  );
});

it('should render large inactive toggle', () => {
  const label = 'Hey! Toggle me!';
  render(<Toggle isActive={false} onToggle={mockOnToggle} label={label} />);

  waitFor(
    () => {
      const toggleBackground = screen.queryByTestId('@fv/InputWithToggle-toggleBackground');

      expect(toggleBackground?.className).toContain('bg-default-light'); // inactive
      expect(toggleBackground?.className).toContain('w-11'); // large

      expect(screen.queryByTestId('@fv/InputWithToggle-toggleCircle')?.className).toContain('left-0'); // inactive
    },
    { timeout: 100 }
  );
});
it('should render small inactive toggle', () => {
  const label = 'Hey! Toggle me!';
  render(<Toggle isActive={false} onToggle={mockOnToggle} size='small' label={label} />);

  waitFor(
    () => {
      const toggleBackground = screen.queryByTestId('@fv/InputWithToggle-toggleBackground');

      expect(toggleBackground?.className).toContain('bg-default-light'); // inactive
      expect(toggleBackground?.className).toContain('w-[1.8125rem]'); // small

      expect(screen.queryByTestId('@fv/InputWithToggle-toggleCircle')?.className).toContain('left-0'); // inactive
    },
    { timeout: 100 }
  );
});

it('should render large disabled toggle', () => {
  const label = 'Hey! Toggle me!';
  render(<Toggle isActive={false} onToggle={mockOnToggle} disabled={true} label={label} />);

  waitFor(
    () => {
      const toggleBackground = screen.queryByTestId('@fv/InputWithToggle-toggleBackground');

      expect(toggleBackground?.className).not.toContain('bg-default-light'); // disabled
      expect(toggleBackground?.className).toContain('bg-default'); // disabled
      expect(toggleBackground?.className).toContain('w-11'); // large
    },
    { timeout: 100 }
  );
});
it('should render small disabled toggle', () => {
  const label = 'Hey! Toggle me!';
  render(<Toggle isActive={false} onToggle={mockOnToggle} size='small' disabled={true} label={label} />);

  waitFor(
    () => {
      const toggleBackground = screen.queryByTestId('@fv/InputWithToggle-toggleBackground');

      expect(toggleBackground?.className).not.toContain('bg-default-light'); // disabled
      expect(toggleBackground?.className).toContain('bg-default'); // disabled
      expect(toggleBackground?.className).toContain('w-[1.8125rem]'); // small
    },
    { timeout: 100 }
  );
});
