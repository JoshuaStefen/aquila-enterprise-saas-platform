import { PrismaClient } from "@prisma/client";
import { authGuard } from "../../middleware/auth.middleware";
import { allow } from "../../middleware/rbac.middleware";

const prisma = new PrismaClient();

export async function adminRoutes(app: any) {
  app.get(
    "/users",
    { preHandler: [authGuard, allow(["SUPERADMIN", "ADMIN"])] },
    async () => {
      return prisma.user.findMany();
    }
  );

  app.get(
    "/subscriptions",
    { preHandler: [authGuard, allow(["SUPERADMIN"])] },
    async () => {
      return prisma.subscription.findMany();
    }
  );
}
