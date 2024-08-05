import { api } from '@workshop/epic-sdk'

export interface User {
  id: string
  name: string
}

export async function authorize(userId: string) {
  // As a part of authorization, we need to query our database
  // for the given user. For that, we are using an imaginary SDK
  // that performs SQL operations for us.
  const user = await api.queryTable<User>('users', userId).catch((error) => {
    throw new Error(`Failed to fetch user by id "${userId}"`, {
      cause: error,
    })
  })

  return user
}
