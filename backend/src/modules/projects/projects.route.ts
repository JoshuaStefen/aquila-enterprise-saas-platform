import { prisma } from "../../config/prisma";
import { authGuard } from "../../middleware/auth.middleware";

export async function projectsRoutes(app: any) {
  app.post(
    "/",
    { preHandler: authGuard },
    async (req: any) => {
      const { name } = req.body;

      return prisma.project.create({
        data: {
          name,
          orgId: req.user.orgId,
        },
      });
    }
  );

  app.get(
    "/",
    { preHandler: authGuard },
    async (req: any) => {
      return prisma.project.findMany({
        where: { orgId: req.user.orgId },
      });
    }
  );
}
