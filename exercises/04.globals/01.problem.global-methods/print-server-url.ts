interface Server {
  host: string
  port?: number
}

/**
 * Print the server URL to the console.
 */
export function printServerUrl(server: Server) {
  const url = new URL(`http://${server.host}`)
  url.port = server.port?.toString() || ''

  console.log(`Server is listening at ${url.href}`)
}
