import Link from 'next/link';
import React from 'react';
import styles from './custom-link.module.scss';

export type CustomLinkProps = {
  as: string;
  href: string;
};

export function CustomLink({ as, href, ...props }: CustomLinkProps) {
  return <Link as={as} href={href} {...props} />;
}

export default CustomLink;
