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
