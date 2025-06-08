'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-4 bg-blue-100">
      <Link href="/">Home</Link>
      <Link href="/doctors">Doctors</Link>
      <Link href="/doctors/cardiology">Cardiology</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/login">Login</Link>
      <Link href="/my-appointments">Appointments</Link>
      <Link href="/my-profile">My Profile</Link>
    </nav>
  );
}
