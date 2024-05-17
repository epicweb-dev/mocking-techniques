import { getGreetingText } from './get-greeting-text.js'

const originalLanguages = globalThis.navigator.languages

afterEach(() => {
  Object.defineProperty(globalThis.navigator, 'languages', {
    value: originalLanguages,
  })
})

test('returns a user greeting in Spanish', () => {
  Object.defineProperty(globalThis.navigator, 'languages', {
    value: ['es'],
    writable: true,
  })
  expect(getGreetingText('Sarah')).toBe('¡Hola, Sarah!')
})

test('returns a user greeting in English by default', () => {
  expect(getGreetingText('Kody')).toBe('Hello, Kody!')
})
