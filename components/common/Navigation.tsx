import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { NavigationBox } from './styles';

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <NavigationBox>
      <div className="inner">
        <Link href="/">
          <a className={pathname === '/' ? 'active' : ''}>HOME</a>
        </Link>
        <Link href="/about">
          <a className={pathname === '/about' ? 'active' : ''}>ABOUT</a>
        </Link>
        <Link href="/collection">
          <a className={pathname === '/collection' ? 'active' : ''}>COLLECTION</a>
        </Link>
        <Link href="/eBook">
          <a className={pathname === '/eBook' ? 'active' : ''}>E-BOOK</a>
        </Link>
        <Link href="/contact">
          <a className={pathname === '/contact' ? 'active' : ''}>CONTACT</a>
        </Link>
      </div>
    </NavigationBox>
  );
}
