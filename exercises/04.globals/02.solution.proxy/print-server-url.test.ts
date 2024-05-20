import { printServerUrl } from './print-server-url.js'

const originalConsoleLog = globalThis.console.log
const consoleLogSpy = vi.fn()

beforeAll(() => {
  globalThis.console.log = new Proxy(globalThis.console.log, {
    apply(target, thisArg, args) {
      consoleLogSpy.apply(thisArg, args)
      return Reflect.apply(target, thisArg, args)
    },
  })
})

afterEach(() => {
  consoleLogSpy.mockReset()
})

afterAll(() => {
  globalThis.console.log = originalConsoleLog
})

test('prints the server message for url with host and no port', () => {
  printServerUrl({ host: '127.0.0.1' })

  expect(consoleLogSpy).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1/',
  )
  expect(consoleLogSpy).toHaveBeenCalledOnce()
})

test('prints the server message for url with host and port', () => {
  printServerUrl({ host: '127.0.0.1', port: 5639 })

  expect(consoleLogSpy).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1:5639/',
  )
  expect(consoleLogSpy).toHaveBeenCalledOnce()
})
