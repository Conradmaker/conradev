'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import CategoryList from './CategoryList';
import OmniBar from './OmniBar';
import { NavigationBox } from './styles';

export default function Navigation() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  if (pathname?.startsWith('/edit')) return <></>;
  return (
    <NavigationBox>
      <div className="inner">
        <nav>
          <Link title="전체글" className={pathname === '/' ? 'active' : ''} href="/">
            전체글
          </Link>
          <Link
            title="인사이트"
            className={pathname?.includes('/insight') ? 'active' : ''}
            href="/insight"
          >
            인사이트
          </Link>
          <Link
            title="개발글"
            className={pathname?.includes('/dev') ? 'active' : ''}
            href="/dev"
          >
            개발글
          </Link>
          <div className="keyword">
            키워드
            <CategoryList />
          </div>
        </nav>
        <div className="search">
          {searchOpen && (
            <OmniBar
              onClose={() => {
                document.documentElement.style.overflowY = 'auto';
                setSearchOpen(false);
              }}
              open={searchOpen}
            />
          )}
          <IoSearch
            onClick={() => {
              document.documentElement.style.overflowY = 'hidden';
              setSearchOpen(true);
            }}
          />
        </div>
      </div>
    </NavigationBox>
  );
}
