import { toAbsoluteUrl } from './to-absolute-url'

// 🐨 Add the `beforeAll` hook and call the `vi.stubGlobal` function there.
// As the first argument, provide it with the string "location", indicating
// what global object to mock. As the second argument, provide a mock URL
// "http://localhost/base/" representing the location you want.
// 💰 beforeAll(callback)
// 💰 vi.stubGlobal(property, value)
// 💰 new URL('http://localhost/base/')

// 🐨 Add the `afterAll` hook and call the `vi.unstubAllGlobals` function
// to restore the patched global values and clean up after yourself.

test('returns an absolute url as-is', () => {
  // 🐨 Call the `toAbsoluteUrl` function with an absolute URL as the argument
  // and assert that URL is returned as-is.
  // 💰 expect(toAbsoluteUrl('https://example.com')).toBe(expected)
})

test('resolves a relative url against the current location', () => {
  // 🐨 Call the `toAbsoluteUrl` function with an absolute path (!) as the argument
  // and assert that URL is resolved against the current location.
  // 💰 expect(toAbsoluteUrl('/resource')).toBe(expected)
  //
  // 🐨 Add another case where the `toAbsoluteUrl` function is called with
  // a relative path (!). Complete the assertion similarly, keeping in mind
  // that the relative path will be resolved to a URL including "/base/".
  // 💰 expect(toAbsoluteUrl('./resource')).toBe(expected)
})
