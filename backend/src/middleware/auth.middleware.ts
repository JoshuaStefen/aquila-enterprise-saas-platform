export async function authGuard(req: any, res: any) {
  try {
    await req.jwtVerify();
  } catch {
    return res.status(401).send({ error: "Unauthorized" });
  }
}
