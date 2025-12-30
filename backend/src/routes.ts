import { authRoutes } from "./modules/auth/auth.routes";
import { adminRoutes } from "./modules/admin/admin.routes";
import { billingRoutes } from "./modules/billing/billing.routes";
import { logsRoutes } from "./modules/logs/logs.routes";
import { organizationsRoutes } from "./modules/organizations/organizations.routes";
import { projectsRoutes } from "./modules/projects/projects.routes";
import { usersRoutes } from "./modules/users/users.routes";
import { featureRoutes } from "./modules/features/features.routes";

export async function routes(app: any) {
  app.register(authRoutes, { prefix: "/api/auth" });
  app.register(adminRoutes, { prefix: "/api/admin" });
  app.register(billingRoutes, { prefix: "/api/billing" });

  app.register(logsRoutes, { prefix: "/api/logs" });
  app.register(organizationsRoutes, { prefix: "/api/orgs" });
  app.register(projectsRoutes, { prefix: "/api/projects" });
  app.register(usersRoutes, { prefix: "/api/users" });
  app.register(featureRoutes, { prefix: "/api/features" });

  app.get("/health", async () => ({ status: "ok" }));
}
