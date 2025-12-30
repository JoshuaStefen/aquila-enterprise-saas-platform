import { prisma } from "../../config/prisma";

export async function incrementProjectUsage(projectId: string) {
  await prisma.project.update({
    where: { id: projectId },
    data: { apiCalls: { increment: 1 } }
  });
}
