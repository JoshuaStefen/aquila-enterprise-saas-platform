import { prisma } from "../../config/prisma";
import { authGuard } from "../../middleware/auth.middleware";
import { allow } from "../../middleware/rbac.middleware";

export async function limitsRoutes(app: any) {
  app.post(
    "/set-limit",
    { preHandler: [authGuard, allow(["SUPERADMIN"])] },
    async (req: any) => {
      const { orgId, maxApiCalls } = req.body;
      return prisma.usageLimit.upsert({
        where: { orgId },
        update: { maxApiCalls },
        create: { orgId, maxApiCalls }
      });
    }
  );
}
