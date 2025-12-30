"use client";

import { useState } from "react";
import { api } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function submit() {
    await api("/api/auth/register", "POST", { email, password });
    router.push("/login");
  }

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Create Account</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-4"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full bg-black text-white py-2 rounded"
      >
        Register
      </button>
    </div>
  );
}
