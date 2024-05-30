import { server } from './mocks/node.js'

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
