'use client'
import { useState } from 'react';
import { Header } from './components/Header';
import Login from './pages/Login/page';
import Dashboard from './pages/Dashboard/page';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        {isLoggedIn ? (<Dashboard />) : (<Login />)}
      </main>
    </>
  );
}
