import { Connection } from './connection.js'

beforeAll(() => {
  vi.useFakeTimers({
    toFake: ['queueMicrotask'],
  })
})

afterAll(() => {
  vi.useRealTimers()
})

test('dispatches the "connection" event', () => {
  const connectionListener = vi.fn()

  const connection = new Connection()
  connection.addEventListener('connection', connectionListener)

  vi.runAllTicks()

  expect(connectionListener).toHaveBeenCalledOnce()
})
