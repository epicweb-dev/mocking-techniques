import { Emitter } from './emitter.js'

beforeAll(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
  vi.resetAllMocks()
  vi.unstubAllEnvs()
})

afterAll(() => {
  vi.restoreAllMocks()
})

test('invokes the listener whenever a matching event is emitted', () => {
  const emitter = new Emitter<{ hello: [firstName: string] }>()
  const listener = vi.fn()

  emitter.on('hello', listener)
  emitter.emit('hello', 'John')

  expect(listener).toHaveBeenCalledOnce()
  expect(listener).toHaveBeenCalledWith('John')
})

test('logs debugging messages when run in development', () => {
  vi.stubEnv('NODE_ENV', 'development')

  const emitter = new Emitter<{ hello: [firstName: string] }>()
  const listener = vi.fn()

  emitter.on('hello', listener)
  expect(console.log).toHaveBeenCalledWith(
    `adding listener for "hello" event...`,
  )

  emitter.emit('hello', 'John')
  expect(console.log).toHaveBeenCalledWith(
    `emitting listeners for "hello" event (1)`,
  )
})

test('does not log debugging messages in production', () => {
  vi.stubEnv('NODE_ENV', 'production')

  const emitter = new Emitter<{ hello: [firstName: string] }>()
  const listener = vi.fn()

  emitter.on('hello', listener)
  expect(console.log).not.toHaveBeenCalled()

  emitter.emit('hello', 'John')
  expect(console.log).not.toHaveBeenCalled()
})
