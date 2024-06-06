import { logger } from './logger.js'

export async function handleRequest(request: Request) {
  logger.info('handling request...', { request })

  if (!request.headers.has('authorization')) {
    logger.error('failed: unauthorized', { request })

    throw new Error(
      `Cannot handle the "${request.method}" request to "${request.url}": not authorized`,
    )
  }

  logger.info('handled successfully!', { request })

  return Response.json({
    ok: true,
  })
}
