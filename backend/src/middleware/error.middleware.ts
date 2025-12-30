import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export async function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  request.log.error(error);

  reply.status(error.statusCode || 500).send({
    success: false,
    message: error.message || "Internal Server Error",
  });
}
