interface Server {
  host: string
  port?: number
}

/**
 * Print the server URL to the console.
 */
export function printServerUrl(server: Server) {
  const url = new URL(`http://${server.host}:${server.port || ''}`)
  console.log(`Sever is listening at ${url.href}`)
}
