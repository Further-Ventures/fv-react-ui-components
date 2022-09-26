import React from 'react';
import classNames from 'classnames';

interface ILoaderProps {
  variant?: 'circular' | 'bar';
  progress?: number;
  flat?: boolean;
  className?: string;
}

const TEST_ID = '@fv/Loader';
const DIAMETER = 48;
const BAR_LENGTH = 236;
const STROKE_WIDTH = 4;
const INNER_RADIUS = DIAMETER / 2 /* radius */ - STROKE_WIDTH / 2;

export const Loader: React.FC<ILoaderProps> = ({ variant = 'circular', flat = false, progress = -1 }) => {
  const limitedProgress = progress < -1 ? 0 : progress > 100 ? 100 : progress;

  const calculateProgress = () => {
    const circumferenceOrLength = variant === 'circular' ? 2 * Math.PI * INNER_RADIUS : BAR_LENGTH;
    const dasharray0 = Math.round((circumferenceOrLength * limitedProgress) / 100);
    const dasharray1 = circumferenceOrLength - dasharray0;

    return progress > -1
      ? {
          strokeDasharray: `${variant === 'circular' && !flat ? dasharray0 - 1 : dasharray0} ${dasharray1}`,
          strokeDashoffset: `${progress === 0 ? 1 : 0}`,
        }
      : {};
  };
  const svgClasses = 'absolute t-0 l-0 r-0 b-0 m-auto w-full h-full origin-center';
  const circularComponent =
    variant === 'circular' ? (
      <svg
        className={classNames(svgClasses, {
          ['animate-spin']: progress === -1,
          ['rotate-270']: progress > -1,
        })}
        viewBox='24 24 48 48'
        data-testid={`${TEST_ID}-svg`}
      >
        <circle
          className={classNames('stroke-primary', {
            ['animate-partialPathFill']: progress === -1,
            ['transition-all ease-out duration-300']: progress > -1,
            ['circular-path-loader']: flat,
            ['circular-path-rounded-loader']: !flat,
          })}
          style={calculateProgress()}
          cx={DIAMETER}
          cy={DIAMETER}
          r={INNER_RADIUS}
          fill='none'
          strokeWidth='4'
          data-testid={`${TEST_ID}-circle`}
        />
      </svg>
    ) : null;

  const barComponent =
    variant === 'bar' ? (
      <svg viewBox='0 0 240 4' className={svgClasses} data-testid={`${TEST_ID}-svg`}>
        <line
          x1='2'
          y1='2'
          x2={BAR_LENGTH + 2}
          y2='2'
          className={classNames('stroke-primary-light', {
            ['line-path-rounded-loader']: !flat,
          })}
          strokeWidth='4'
          data-testid={`${TEST_ID}-backgroundLine`}
        />
        <line
          x1='2'
          y1='2'
          x2={BAR_LENGTH + 2}
          y2='2'
          className={classNames('stroke-primary', {
            ['animate-partialLineFill']: progress === -1,
            ['transition-all ease-out duration-300']: progress > -1,
            ['line-path-rounded-loader']: !flat,
          })}
          strokeWidth='4'
          style={calculateProgress()}
          data-testid={`${TEST_ID}-progressLine`}
        />
      </svg>
    ) : null;

  return (
    <div
      className={classNames('relative my-0 mx-auto', {
        ['w-12 h-12']: variant === 'circular',
        ['w-60 h-1']: variant === 'bar',
      })}
      data-testid={`${TEST_ID}-loader`}
    >
      {circularComponent}
      {barComponent}
    </div>
  );
};

Loader.defaultProps = {
  variant: 'circular',
  flat: false,
  progress: -1,
};
