import { toAbsoluteUrl } from './to-absolute-url'

beforeAll(() => {
  vi.stubGlobal('location', new URL('http://localhost/base/'))
})

afterAll(() => {
  vi.unstubAllGlobals()
})

test('returns an absolute url as-is', () => {
  expect(toAbsoluteUrl('https://example.com/')).toBe('https://example.com/')
})

test('resolves a relative url against the current location', () => {
  expect(toAbsoluteUrl('/resource')).toBe('http://localhost/resource')
  expect(toAbsoluteUrl('./resource')).toBe('http://localhost/base/resource')
})
