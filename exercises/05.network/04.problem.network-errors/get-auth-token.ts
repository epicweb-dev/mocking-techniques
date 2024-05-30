/**
 * Get the authentication token for the given user.
 */
export async function getAuthToken(credentials: {
  email: string
  password: string
}) {
  const response = await fetch('https://api.example.com/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  // 🐨 Implement the error handling logic for the cases when
  // the `fetch` promise rejects. If that happens, throw the following
  // error: "Authentication failed: network error" and include the
  // original error as the `cause` property of the thrown error.
  // 💰 .catch(callback)
  // 💰 new Error(message, { cause })

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
