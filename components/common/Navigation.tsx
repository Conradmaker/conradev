import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { NavigationBox } from './styles';

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <NavigationBox>
      <div className="inner">
        <nav>
          <Link className={pathname === '/' ? 'active' : ''} href="/">
            전체글
          </Link>
          <Link className={pathname.includes('/insight') ? 'active' : ''} href="/insight">
            인사이트
          </Link>
          <Link className={pathname.includes('/dev') ? 'active' : ''} href="/dev">
            개발글
          </Link>
        </nav>
        <div className="search">
          <IoSearch />
        </div>
      </div>
    </NavigationBox>
  );
}
