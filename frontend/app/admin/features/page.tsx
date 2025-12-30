"use client";
import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { useAuth } from "../../../store/auth.store";

export default function FeatureFlags() {
  const { token } = useAuth();
  const [flags, setFlags] = useState<any[]>([]);

  useEffect(() => {
    api("/api/features", "GET", null, token!).then(setFlags);
  }, []);

  async function toggle(key: string, enabled: boolean) {
    await api("/api/features/toggle", "POST", { key, enabled }, token!);
    setFlags(flags.map(f => f.key === key ? { ...f, enabled } : f));
  }

  return (
    <div>
      <h1 className="text-xl mb-4">Feature Flags</h1>
      {flags.map(f => (
        <div key={f.key} className="flex justify-between bg-white p-3 mb-2">
          <span>{f.key}</span>
          <button onClick={() => toggle(f.key, !f.enabled)}>
            {f.enabled ? "Disable" : "Enable"}
          </button>
        </div>
      ))}
    </div>
  );
}
