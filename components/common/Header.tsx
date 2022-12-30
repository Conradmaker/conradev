import Link from 'next/link';
import React from 'react';
import { HeaderBox } from './styles';

export default function Header() {
  return (
    <HeaderBox className="inner">
      <Link href="/">
        <span className="logo">Conradev</span>
      </Link>
      <ul className="theme_switch">
        <li>어두운화면</li>
        <li>밝은화면</li>
      </ul>
    </HeaderBox>
  );
}
