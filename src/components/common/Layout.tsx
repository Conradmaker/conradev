import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
