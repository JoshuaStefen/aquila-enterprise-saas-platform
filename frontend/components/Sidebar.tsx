"use client";

import Link from "next/link";
import { useAuth } from "../store/auth.store";

export default function Sidebar() {
  const { role } = useAuth();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Aquila</h2>

      <nav className="flex flex-col gap-3 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/billing">Billing</Link>

        {role === "ADMIN" || role === "SUPERADMIN" ? (
          <Link href="/admin">Admin</Link>
        ) : null}
      </nav>
    </aside>
  );
}
