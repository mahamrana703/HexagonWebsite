import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './header';
import { Footer } from './footer';
import { CursorFollower } from './cursor-follower';
import { CookieConsent } from './cookie-consent';
import { ScrollToTop } from './scroll-to-top';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative" style={{ transform: 'none' }}>
      <CursorFollower />
      <ScrollToTop />
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
