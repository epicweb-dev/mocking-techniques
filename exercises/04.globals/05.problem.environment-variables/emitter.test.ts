import { Emitter } from './emitter.js'

// 🐨 Add the `beforeAll` hook and mock the `console.log` in there.
// Mock the implementation of the `console.log` method to be an empty function.
// Use the previous exercise in "Globals, Global methods" for reference!
// 💰 beforeAll(callback)
// 💰 vi.spyOn(target, method).mockImplementation(implementation)

// 🐨 Add the `afterEach` hook that does two things:
// 1. Reset any introduced mock functions via `vi.resetAllMocks()`.
// 2. Unstubs any stubbed environment variables via `vi.unstubAllEnvs()`.
// 💰 afterEach(callback)

// 🐨 Complete the setup by adding the `afterAll` hook
// and restoring any mocks after the tests are done via `vi.restoreAllMocks()`.
// 💰 afterAll(callback)

test('invokes the listener whenever a matching event is emitted', () => {
  const emitter = new Emitter<{ hello: [firstName: string] }>()
  const listener = vi.fn()

  emitter.on('hello', listener)
  emitter.emit('hello', 'John')

  expect(listener).toHaveBeenCalledOnce()
  expect(listener).toHaveBeenCalledWith('John')
})

test('logs debugging messages when run in development', () => {
  // 🐨 Mock the value of the `process.env.NODE_ENV` variable
  // to be "development", using the `vi.stubEnv()` function.
  // 💰 vi.stubEnv(variableName, value)
  // 🦉 The `vi.stubEnv()` function directly accepts the
  // variable name (e.g. "NODE_ENV"). No need to repeat the entire path to it.

  const emitter = new Emitter<{ hello: [firstName: string] }>()
  const listener = vi.fn()

  // 🐨 Add the `listener` to the "hello" event.
  // 💰 emitter.on(event, listener)

  // 🐨 Write an assertion that the `console.log` has been called
  // with the message "adding listener for "hello" event"
  // 💰 expect(mock).toHaveBeenCalledWith(args)

  // 🐨 Emit the "hello" event with "John" as the data.
  // 💰 emitter.emit(event, data)

  // 🐨 Write another assertion that the `console.log` has been called
  // with the message "emitting listeners for "hello" event (1)"
})

test('does not log debugging messages in production', () => {
  // 🐨 In a similar fashion, mock the `process.env.NODE_ENV` variable
  // to equal to "development".
  // 💰 vi.stubEnv(variableName, value)

  const emitter = new Emitter<{ hello: [firstName: string] }>()
  const listener = vi.fn()

  // 🐨 Add the `listener` to the "hello" event.
  // 💰 emitter.on(event, listener)

  // 🐨 Here, write an assertion that `console.log` was NOT called.
  // 💰 expect(mock).not.toHaveBeenCalled()

  // 🐨 Emit the "hello" event with "John" as the data.
  // 💰 emitter.emit(event, data)

  // 🐨 Finally, add the last assertion that the `console.log` was NOT called.
})
