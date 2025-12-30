import { prisma } from "../../config/prisma";
import { authGuard } from "../../middleware/auth.middleware";
import { allow } from "../../middleware/rbac.middleware";

export async function usersRoutes(app: any) {
  app.get(
    "/",
    { preHandler: [authGuard, allow(["ADMIN", "SUPERADMIN"])] },
    async () => {
      return prisma.user.findMany({
        select: {
          id: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });
    }
  );
}
