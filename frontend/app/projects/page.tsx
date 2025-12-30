"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useAuth } from "../../store/auth.store";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function ProjectsPage() {
  const { token } = useAuth();
  const [projects, setProjects] = useState<any[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    api("/api/projects", "GET", null, token!).then(setProjects);
  }, []);

  async function createProject() {
    const project = await api(
      "/api/projects",
      "POST",
      { name },
      token!
    );
    setProjects([...projects, project]);
    setName("");
  }

  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-2xl mb-4">Projects</h1>

        <div className="flex gap-2 mb-6">
          <input
            className="border p-2"
            placeholder="New project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={createProject}
            className="bg-black text-white px-4"
          >
            Create
          </button>
        </div>

        <ul className="bg-white rounded shadow divide-y">
          {projects.map((p) => (
            <li key={p.id} className="p-3">
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
}
