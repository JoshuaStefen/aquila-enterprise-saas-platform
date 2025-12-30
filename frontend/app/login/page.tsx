"use client";
import { useState } from "react";
import { api } from "../../lib/api";
import { useAuth } from "../../store/auth.store";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const router = useRouter();

  async function submit() {
    const res = await api("/api/auth/login", "POST", { email, password });
    const payload = JSON.parse(atob(res.token.split(".")[1]));
    setAuth(res.token, payload.role);
    router.push("/dashboard");
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded">
      <h1 className="text-xl mb-4">Login</h1>
      <input className="border p-2 w-full" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full mt-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={submit} className="bg-black text-white w-full mt-4 p-2">Login</button>
    </div>
  );
}
