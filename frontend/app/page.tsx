import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <h1 className="text-5xl font-bold mb-4">Aquila SaaS Platform</h1>
      <p className="text-lg mb-8 max-w-xl text-center">
        Enterprise-grade multi-tenant SaaS with real-time metrics, RBAC,
        usage-based billing, and modern architecture.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-white text-black px-6 py-3 rounded font-semibold"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="border border-white px-6 py-3 rounded font-semibold"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
