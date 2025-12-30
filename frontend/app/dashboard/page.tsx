"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useAuth } from "../../store/auth.store";
import MetricsChart from "../../components/MetricsChart";

export default function Dashboard() {
  const { token } = useAuth();
  const [logs, setLogs] = useState<any[]>([]);
  const [counts, setCounts] = useState<number[]>([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await api("/api/logs", "GET", null, token!);
      setLogs(data);
      setCounts((prev) => [...prev.slice(-9), data.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
        <button
          onClick={() => setDark(!dark)}
          className="border px-3 py-1 rounded"
        >
          Toggle Dark Mode
        </button>
      </div>

      <section className="bg-white dark:bg-slate-800 p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">API Activity</h2>
        <MetricsChart values={counts} />
      </section>

      <section className="bg-white dark:bg-slate-800 p-4 rounded">
        <h2 className="font-semibold mb-2">Audit Trail</h2>
        <ul className="text-sm max-h-48 overflow-auto">
          {logs.map((l, i) => (
            <li key={i}>{l.event}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
