/**
 * Get the authentication token for the given user.
 */
export async function getAuthToken(credentials: {
  email: string
  password: string
}) {
  // Instead of awaiting the response promise,
  // store the pending promise in a variable.
  const responsePromise = fetch('https://api.example.com/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).catch((error) => {
    throw new Error('Authentication failed: network error', { cause: error })
  })

  // Create a timeout promise that always rejects after
  // a certain timeout period (here, after 3 seconds).
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error('Authentication failed: request timed out'))
    }, 3000)
  })

  // Use `Promise.race()` to create a race condition between
  // the response promise and the timeout promise. Whoever resolver/rejects
  // first wins.
  const response = await Promise.race([responsePromise, timeoutPromise])

  if (response.status === 401) {
    throw new Error('Authentication failed: invalid credentials')
  }

  if (!response.ok) {
    throw new Error('Authentication failed: network error')
  }

  const json = await response.json()

  return {
    token: json.token,
  }
}
