import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { log } from "../../utils/logger";

const prisma = new PrismaClient();

export async function authRoutes(app: any) {
  app.post("/register", async (req: any) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hash }
    });

    log("USER_REGISTERED", { userId: user.id });
    return user;
  });

  app.post("/login", async (req: any) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    const token = app.jwt.sign({ id: user.id, role: user.role });
    log("USER_LOGIN", { userId: user.id });

    return { token };
  });
}
