import type { User } from './authorize.js'

const queryTableMock = vi.fn<() => Promise<User>>()

beforeAll(() => {
  vi.doMock(import('@workshop/epic-sdk'), async (importOriginal) => {
    const original = await importOriginal()
    original.api.queryTable<User> = queryTableMock

    return original
  })
})

afterEach(() => {
  vi.resetAllMocks()
})

test('returns the authorized user', async () => {
  const { authorize } = await import('./authorize.js')
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
  const { authorize } = await import('./authorize.js')
  queryTableMock.mockResolvedValue(null)

  await expect(authorize('abc-123')).resolves.toBeNull()
})

test('throws an error if querying the user failed', async () => {
  const { authorize } = await import('./authorize.js')
  queryTableMock.mockRejectedValue(new Error('Original error'))

  await expect(authorize('abc-123')).rejects.toThrow(
    'Failed to fetch user by id "abc-123"',
  )
})
