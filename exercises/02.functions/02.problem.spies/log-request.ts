/**
 * Log the given request in the console.
 *
 * @example
 * logRequest(new Request('https://example.com/foo'))
 * // GET /foo
 */
export async function logRequest(request: Request) {
  const url = new URL(request.url)
  console.log(`${request.method} ${url.pathname}`)

  const body = await request.text()

  if (body) {
    console.log(body)
  }
}
