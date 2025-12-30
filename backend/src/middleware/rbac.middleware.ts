export const allow =
  (roles: string[]) =>
  async (req: any, res: any) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send({ error: "Forbidden" });
    }
  };
