import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BodyText } from './index';

// it('should rendered bold slanted quote', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(<BodyText variation="quote">{children}</BodyText>);

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(q)/i);

//   expect(
//     element.className
//   ).toContain('font-bold');
// });
// it('should rendered bold slanted quote even if we add different props to change the styling to something that is not in the design', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="quote" fontWeight={400} size="s">
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(q)/i);

//   expect(
//     element.className
//   ).toContain('font-bold');
// });

// it('should rendered bold large p', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="paragraph" fontWeight={700} size="l">
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-bold');
//   expect(
//     element.className
//   ).toContain('text-base2');
// });
// it('should rendered medium large p', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="paragraph" fontWeight={500} size="l">
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-medium');
//   expect(
//     element.className
//   ).toContain('text-base2');
// });
// it('should rendered regular large p', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="paragraph" fontWeight={400} size="l">
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-normal');
//   expect(
//     element.className
//   ).toContain('text-base2');
// });

// it('should rendered regular normal p', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="paragraph" fontWeight={700}>
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-bold');
//   expect(
//     element.className
//   ).toContain('text-base');
// });
// it('should rendered regular normal p', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="paragraph" fontWeight={500}>
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-medium');
//   expect(
//     element.className
//   ).toContain('text-base');
// });
// it('should rendered regular normal p', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(<BodyText variation="paragraph">{children}</BodyText>);

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-normal');
//   expect(
//     element.className
//   ).toContain('text-base');
// });
// it('should rendered regular normal p even if we add different props to change the styling to something that is not in the design', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="paragraph" size="s">
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-normal');
//   expect(
//     element.className
//   ).toContain('text-base');
// });

// it('should rendered bold description', () => {
//   const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
//   render(
//     <BodyText variation="description" fontWeight={700}>
//       {children}
//     </BodyText>
//   );

//   const element = screen.queryByText(children) as HTMLElement;
//   expect(element).toBeInTheDocument();
//   expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

//   expect(
//     element.className
//   ).toContain('font-bold');
//   expect(
//     element.className
//   ).toContain('text-xs');
// });
it('should rendered medium description', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<BodyText variation='description'>{children}</BodyText>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-xs');
});
it('should rendered medium description even if we add different props to change the styling to something that is not in the design', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='description' fontWeight={400} size='l'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(p)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-xs');
});

it('should rendered regular caption', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<BodyText variation='caption'>{children}</BodyText>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('font-normal');
  expect(element.className).toContain('text-xs');
});
it('should rendered regular caption even if we add different props to change the styling to something that is not in the design', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='caption' fontWeight={700} size='l'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('font-normal');
  expect(element.className).toContain('text-xs');
});

it('should rendered small', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<BodyText variation='small'>{children}</BodyText>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(small)/i);

  expect(element.className).toContain('font-normal');
  expect(element.className).toContain('text-xxs');
});
it('should rendered small even if we add different props to change the styling to something that is not in the design', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='small' fontWeight={700} size='l'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(small)/i);

  expect(element.className).toContain('font-normal');
  expect(element.className).toContain('text-xxs');
});

it('should rendered medium button text', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='button' size='l'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-base');
});
it('should rendered medium weight and medium size button text', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='button' size='m'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-sm');
});
it('should rendered medium weight and small size button text', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='button' size='s'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-xxs');
});
it('should rendered medium weight and small size button text even if we add different props to change the styling to something that is not in the design', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='button' fontWeight={700} size='s'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(span)/i);

  expect(element.className).toContain('font-medium');
  expect(element.className).toContain('text-xxs');
});

it('should rendered regular label', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(<BodyText variation='label'>{children}</BodyText>);

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(label)/i);

  expect(element.className).toContain('font-normal');
  expect(element.className).toContain('text-sm');
});
it('should rendered bold label', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='label' fontWeight={700}>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(label)/i);

  expect(element.className).toContain('font-bold');
  expect(element.className).toContain('text-sm');
});
it('should rendered regular label even if we add different props to change the styling to something that is not in the design', () => {
  const children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  render(
    <BodyText variation='label' fontWeight={500} size='s'>
      {children}
    </BodyText>
  );

  const element = screen.queryByText(children) as HTMLElement;
  expect(element).toBeInTheDocument();
  expect(element?.tagName?.toLowerCase()).toMatch(/(label)/i);

  expect(element.className).toContain('font-normal');
  expect(element.className).toContain('text-sm');
});
