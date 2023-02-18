import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { NavigationBox } from './styles';

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <NavigationBox>
      <div className="inner">
        <Link className={pathname === '/' ? 'active' : ''} href="/">
          전체글
        </Link>
        <Link className={pathname.includes('/about') ? 'active' : ''} href="/about">
          ABOUT
        </Link>
        <Link className={pathname.includes('/series') ? 'active' : ''} href="/series">
          SERIES
        </Link>
        <Link className={pathname.includes('/eBook') ? 'active' : ''} href="/eBook">
          E-BOOK
        </Link>
        <Link className={pathname.includes('/contact') ? 'active' : ''} href="/contact">
          CONTACT
        </Link>
      </div>
    </NavigationBox>
  );
}
