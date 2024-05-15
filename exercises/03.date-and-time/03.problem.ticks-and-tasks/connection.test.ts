import { Connection } from './connection.js'

// 🐨 Add the "beforeAll" and "afterAll" hooks that
// mock the date using `vi.useFakeTimers()` and
// `vi.useRealTimers()` respectively.
// 💰 beforeAll(callback)
// 💰 afterAll(callback)

// By default, Vitest does not mock "queueMicrotask".
// 🐨 Configure the `vi.useFakeTimers` to mock "queueMicrotask".
// 💰 vi.useFakeTimers({ toFake: ['queueMicrotask'] })

test('dispatches the "connection" event', () => {
  // 🐨 Write the test case for the "Connection" instance
  // dispatching the "connection" event. You'd have to observe
  // the calls to the connection listener function, so feel free
  // to utilize everything you've learned up to this point!
  //
  // 🐨 Use `vi.runAllTicks()` to exhaust the event loop,
  // running any scheduled tasks, like the "dispatchEvent()"
  // from the "Connection" constructor.
  //
  // 🐨 Write an assertion that the "connection" event listener
  // has been called once.
})
