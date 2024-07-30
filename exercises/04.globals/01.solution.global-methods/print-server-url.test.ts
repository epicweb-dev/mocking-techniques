import { printServerUrl } from './print-server-url.js'

beforeAll(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

afterEach(() => {
  vi.resetAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
})

test('prints the server message for url with host and no port', () => {
  printServerUrl({ host: '127.0.0.1' })

  expect(console.log).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1/',
  )
  expect(console.log).toHaveBeenCalledOnce()
})

test('prints the server message for url with host and port', () => {
  printServerUrl({ host: '127.0.0.1', port: 5639 })

  expect(console.log).toHaveBeenCalledWith(
    'Sever is listening at http://127.0.0.1:5639/',
  )
  expect(console.log).toHaveBeenCalledOnce()
})
