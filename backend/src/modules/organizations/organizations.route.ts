import { prisma } from "../../config/prisma";
import { authGuard } from "../../middleware/auth.middleware";

export async function organizationsRoutes(app: any) {
  app.post(
    "/",
    { preHandler: authGuard },
    async (req: any) => {
      const { name } = req.body;

      const org = await prisma.organization.create({
        data: { name },
      });

      return org;
    }
  );

  app.get(
    "/",
    { preHandler: authGuard },
    async () => {
      return prisma.organization.findMany();
    }
  );
}
