import { authGuard } from "../../middleware/auth.middleware";
import { LogModel } from "../../config/mongo";

export async function logsRoutes(app: any) {
  app.get(
    "/",
    { preHandler: authGuard },
    async () => {
      return LogModel.find().sort({ createdAt: -1 }).limit(100);
    }
  );
}
