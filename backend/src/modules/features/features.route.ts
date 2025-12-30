import { prisma } from "../../config/prisma";
import { authGuard } from "../../middleware/auth.middleware";
import { allow } from "../../middleware/rbac.middleware";

export async function featureRoutes(app: any) {
  app.get("/", { preHandler: authGuard }, async (req: any) => {
    return prisma.featureFlag.findMany({
      where: { orgId: req.user.orgId }
    });
  });

  app.post(
    "/toggle",
    { preHandler: [authGuard, allow(["ADMIN", "SUPERADMIN"])] },
    async (req: any) => {
      const { key, enabled } = req.body;
      return prisma.featureFlag.upsert({
        where: { key },
        update: { enabled },
        create: { key, enabled, orgId: req.user.orgId }
      });
    }
  );
}
