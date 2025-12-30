"use client";
import { api } from "../../lib/api";
import { useAuth } from "../../store/auth.store";

export default function Billing() {
  const { token } = useAuth();

  async function subscribe(plan: string) {
    await api("/api/billing/subscribe", "POST", { plan }, token!);
    alert("Subscribed!");
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {["FREE", "PRO", "ENTERPRISE"].map(p => (
        <div key={p} className="bg-white p-4 rounded">
          <h2 className="font-bold">{p}</h2>
          <p>Usage-based pricing</p>
          <button onClick={() => subscribe(p)} className="mt-2 bg-black text-white p-2">
            Choose
          </button>
        </div>
      ))}
    </div>
  );
}
