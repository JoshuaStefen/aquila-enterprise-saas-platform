"use client";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useAuth } from "../../store/auth.store";

export default function Admin() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api("/api/admin/users", "GET", null, token!).then(setUsers);
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Admin Panel</h1>
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>{u.email} — {u.role}</li>
        ))}
      </ul>
    </div>
  );
}
