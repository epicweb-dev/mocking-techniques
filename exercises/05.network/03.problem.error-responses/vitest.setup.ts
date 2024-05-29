// 🐨 Move these exports to the new "./mocks/node.ts" module.
import { setupServer } from 'msw/node'
import { handlers } from './handlers.js'

// 🐨 Move this `server` instance declaration to the
// new "./mocks/node.ts" module as well.
// 🐨 Export the `server` object from "./mocks/node.ts".
const server = setupServer(...handlers)

// 🐨 Here, import the `server` from "./mocks/node.ts".
// 💰 import { something } from './somewhere.js'

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
