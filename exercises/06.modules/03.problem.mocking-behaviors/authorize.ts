import { queryTable } from '@workshop/epic-sdk'

export interface User {
  id: string
  name: string
}

export async function authorize(userId: string) {
  // As a part of authorization, we need to query the database
  // for the given user. For that, we are using an imaginary
  // third-party SDK package that performs SQL operations for us.
  const user = await queryTable<User>('users', {
    where: { id: { equals: userId } },
  }).catch((error) => {
    throw new Error(`Failed to fetch user by id "${userId}"`, {
      cause: error,
    })
  })

  return user
}
