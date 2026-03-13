import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './header';
import { Footer } from './footer';
import { CursorFollower } from './cursor-follower';
import { CookieConsent } from './cookie-consent';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative" style={{ transform: 'none' }}>
      <CursorFollower />
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}