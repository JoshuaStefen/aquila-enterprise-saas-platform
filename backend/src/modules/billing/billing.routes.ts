import { PrismaClient, Plan } from "@prisma/client";
import { authGuard } from "../../middleware/auth.middleware";

const prisma = new PrismaClient();

export async function billingRoutes(app: any) {
  app.post("/subscribe", { preHandler: authGuard }, async (req: any) => {
    const { plan } = req.body;

    await prisma.subscription.create({
      data: {
        orgId: req.user.orgId,
        plan: plan as Plan,
        status: "ACTIVE"
      }
    });

    return { success: true };
  });
}
