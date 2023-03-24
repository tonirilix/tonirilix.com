import Link from 'next/link';
import clsx from 'clsx';

import type { ReactNode } from 'react';

type ButtonVariant = {
  variant: 'button';
  onClick?: () => void;
};

type LinkVariant = {
  variant: 'link';
  href: string;
};

type Variants = ButtonVariant | LinkVariant;
export type TopicButtonProps = {
  children: string;
  size?: 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & Variants;

export function ActionButton({
  children,
  size = 'medium',
  startIcon,
  endIcon,
  ...props
}: TopicButtonProps) {
  const sharedStyles = clsx(
    'bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded max-w-max flex gap-2',
    {
      'py-2': size === 'medium',
      'py-3': size === 'large',
    }
  );
  const render = (
    <>
      {startIcon}
      {children}
      {endIcon}
    </>
  );

  if (props.variant === 'button')
    return (
      <button type="button" onClick={props.onClick} className={sharedStyles}>
        {render}
      </button>
    );

  return (
    <Link href={props.href} className={clsx(sharedStyles, 'no-underline')}>
      {render}
    </Link>
  );
}

export default ActionButton;
