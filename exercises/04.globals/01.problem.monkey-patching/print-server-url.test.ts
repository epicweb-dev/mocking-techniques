import { printServerUrl } from './print-server-url.js'

// 🐨 First, start from storing the original value of
// `globalThis.console.log` in a variable called `originalConsoleLog`.

// 🐨 Next, create a mock function valled "consoleLogSpy".
// 💰 const consoleLogSpy = vi.fn()

// 🐨 Add the "beforeAll" hook where you will replace the
// original `globalThis.console.log` with the created spy.
// 💰 beforeAll(callback)
// 💰 globalThis.console.log = spyFn

// 🐨 Add the "afterEach" hook that will reset the value of the
// "consoleLogSpy" spy function between each test.
// 💰 afterEach(callback)
// 💰 consoleLogSpy.mockReset()

// 🐨 To finish the setup phase, add the "afterAll" hook
// and reassign the value of `globalThis.console.log` to the `originalConsoleLog`.

test('prints the server message for url with host and no port', () => {
  printServerUrl({ host: '127.0.0.1' })

  // 🐨 Write an assertion that the "consoleLogSpy" mock
  // function has been called with the expected message.
  // 💰 expect(spy).toHaveBeenCalledWith(expected)
  // 💰 'Sever is listening at http://127.0.0.1/'
  //
  // 🐨 Write another assertion that "consoleLogSpy"
  // has been called once.
  // 💰 expect(spy).toHaveBeenCalledOnce()
})

test('prints the server message for url with host and port', () => {
  printServerUrl({ host: '127.0.0.1', port: 5639 })

  // 🐨 Complete this test with the same two assertions:
  // - One for the "consoleLogSpy" beind called with the correct arguments.
  // - The other one for the "consoleLogSpy" being called once.
})
