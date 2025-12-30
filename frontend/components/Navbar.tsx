"use client";
import { useAuth } from "../store/auth.store";

export default function Navbar() {
  const { token, role, logout } = useAuth();

  return (
    <nav className="flex justify-between bg-white p-4 shadow">
      <div className="font-bold">Aquila SaaS</div>
      {token && (
        <div className="flex gap-4">
          <span>{role}</span>
          <button onClick={logout} className="text-red-500">Logout</button>
        </div>
      )}
    </nav>
  );
}
