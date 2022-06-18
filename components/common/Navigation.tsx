import Link from 'next/link';
import React from 'react';
import { NavigationBox } from './styles';

export default function Navigation() {
  return (
    <NavigationBox>
      <div className="inner">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/">
          <a>ABOUT</a>
        </Link>
        <Link href="/">
          <a>COLLECTION</a>
        </Link>
        <Link href="/">
          <a>E-BOOK</a>
        </Link>
        <Link href="/">
          <a>CONTACT</a>
        </Link>
      </div>
    </NavigationBox>
  );
}
