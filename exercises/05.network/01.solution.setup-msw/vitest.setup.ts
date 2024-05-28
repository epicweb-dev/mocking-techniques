import { setupServer } from 'msw/node'
import { handlers } from './handlers.js'

const server = setupServer(...handlers)

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
