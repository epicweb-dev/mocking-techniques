import { printServerUrl } from './print-server-url.js'

// 💣 Delete the `originalConsoleLog` variable.
// We don't have to store the original implementation of `console.log` anymore.
const originalConsoleLog = console.log

// 💣 Delete the empty spy as well.
// Vitest will create a spy automatically inside `vi.spyOn()`.
const consoleLogSpy = vi.fn()

beforeAll(() => {
  // 💣 Delete the reassignment of `console.log`.
  console.log = new Proxy(console.log, {
    apply(target, thisArg, args) {
      consoleLogSpy.apply(thisArg, args)
      // return Reflect.apply(target, thisArg, args)
    },
  })

  // 🐨 Create a spy over `console.log` using `vi.spyOn()`.
  // You can call `.mockImplementation(() => {})` on the spy to silence
  // the `console.log` calls.
  // 💰 vi.spyOn(target, methodName)
})

afterEach(() => {
  // 💣 Delete the manual mock reset.
  consoleLogSpy.mockReset()

  // 🐨 Reset all mocks using `vi.resetAllMocks()` function.
})

afterAll(() => {
  // 💣 Delete the manual restoration of `console.log`.
  console.log = originalConsoleLog

  // 🐨 Restore all mocked globals by calling `vi.restoreAllMocks()`.
})

test('prints the server message for url with host and no port', () => {
  printServerUrl({ host: '127.0.0.1' })

  // 🐨 Adjust these assertions to use `console.log` directly
  // instead of the `consoleLogSpy`.
  expect(consoleLogSpy).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1/',
  )
  expect(consoleLogSpy).toHaveBeenCalledOnce()
})

test('prints the server message for url with host and port', () => {
  printServerUrl({ host: '127.0.0.1', port: 5639 })

  // 🐨 Similarly, adjust these assertions to use `console.log` directly
  // instead of the `consoleLogSpy`.
  expect(consoleLogSpy).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1:5639/',
  )
  expect(consoleLogSpy).toHaveBeenCalledOnce()
})
