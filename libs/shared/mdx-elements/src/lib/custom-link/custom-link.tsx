import Link from 'next/link';
import styles from './custom-link.module.scss';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as: string;
  href: string;
}

export function CustomLink({ as, href, ...props }: CustomLinkProps) {
  return <Link as={as} href={href} {...props} />;
}

export default CustomLink;
