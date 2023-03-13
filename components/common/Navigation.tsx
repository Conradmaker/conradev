import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import OmniBar from './OmniBar';
import { NavigationBox } from './styles';

export default function Navigation() {
  const { pathname } = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <NavigationBox>
      <div className="inner">
        <nav>
          <Link title="전체글" className={pathname === '/' ? 'active' : ''} href="/">
            전체글
          </Link>
          <Link
            title="인사이트"
            className={pathname.includes('/insight') ? 'active' : ''}
            href="/insight"
          >
            인사이트
          </Link>
          <Link
            title="개발글"
            className={pathname.includes('/dev') ? 'active' : ''}
            href="/dev"
          >
            개발글
          </Link>
        </nav>
        <div className="search">
          <OmniBar
            onClose={() => {
              document.documentElement.style.overflowY = 'auto';
              setSearchOpen(false);
            }}
            open={searchOpen}
          />
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
