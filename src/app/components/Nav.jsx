'use client';

import { UserButton, useSessionList } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const { isLoaded, sessions } = useSessionList()()
  console.log('IS LOADED::: ', isLoaded);
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 borde-l-0 border-l-0 border-r-0 border-b-gray-600">
      <div aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            Nextjs Auth
          </Link>
        </div>
      </div>
      <div>
        {
          isLoaded && <p>Welcome back. You have been here {sessions.length} times before.</p>
        }
      </div>
      <>
            <Link href="/dashboard">Dashboard</Link>
            <UserButton afterSignOutUrl="/"/>
          </>
    </nav>
  );
}
