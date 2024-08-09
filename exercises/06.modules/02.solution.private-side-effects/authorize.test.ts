import { authorize, User } from './authorize.js'

const queryTableMock = vi.hoisted(() => vi.fn<() => Promise<User>>())

vi.mock(import('@workshop/epic-sdk'), async () => {
  return {
    queryTable: queryTableMock,
  }
})

afterEach(() => {
  vi.resetAllMocks()
})

test('returns the authorized user', async () => {
  queryTableMock.mockResolvedValue({
    id: 'abc-123',
    name: 'Kody Koala',
  })

  await expect(authorize('abc-123')).resolves.toEqual({
    id: 'abc-123',
    name: 'Kody Koala',
  })
})

test('returns null if no user was found', async () => {
  queryTableMock.mockResolvedValue(null)

  await expect(authorize('abc-123')).resolves.toBeNull()
})

test('throws an error if querying the user failed', async () => {
  queryTableMock.mockRejectedValue(new Error('Original error'))

  await expect(authorize('abc-123')).rejects.toThrow(
    'Failed to fetch user by id "abc-123"',
  )
})
