"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../store/auth.store";

export default function ProtectedRoute({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles?: string[];
}) {
  const { token, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    if (roles && role && !roles.includes(role)) {
      router.push("/dashboard");
    }
  }, [token, role]);

  return <>{children}</>;
}
