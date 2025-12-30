"use client";
import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { useAuth } from "../../../store/auth.store";

export default function ProjectMetrics({ params }: any) {
  const { token } = useAuth();
  const [project, setProject] = useState<any>();

  useEffect(() => {
    api(`/api/projects/${params.id}`, "GET", null, token!)
      .then(setProject);
  }, []);

  if (!project) return null;

  return (
    <div className="bg-white p-4 rounded">
      <h1 className="text-xl mb-2">{project.name}</h1>
      <p>API Calls Used: {project.apiCalls}</p>
    </div>
  );
}
