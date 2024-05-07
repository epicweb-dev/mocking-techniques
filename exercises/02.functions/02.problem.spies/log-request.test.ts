import { logRequest } from './log-request.js'

// 🐨 Spy on the "log" method of the global "console" object
// using the "vi.spyOn()" function in the "beforeAll" hook.
// 💰 beforeAll(callback)
// 💰 vi.spyOn(object, method)

// 🐨 Restore the spy in the "afterAll" hook
// using the "vi.restoreAllMocks()" function.
// 💰 afterAll(callback)

it('logs the given request in the console', () => {
  const request = new Request('https://epicweb.dev/mocking-techniques', {
    method: 'POST',
    body: 'hello world',
  })

  // 🐨 Call the "logRequest" function with mocked "request" instance
  // as the argument.
  // 💰 Keep in mind, "logRequest" is an async function!

  // 🐨 Write an assertion that the first time "console.log" is called
  // it has the request method and relative pathname as the argument.
  // 💰 expect(spy).toHaveBeenNthCalledWith(n, arg)

  // 🐨 Write another assertion that the second time "console.log" is called
  // it has the request body as the argument.

  // 🐨 Finally, write an assertion that the total number of "console.log"
  // calls is two.
  // 💰 expect(spy).toHaveBeenCalledTimes(n)
})
