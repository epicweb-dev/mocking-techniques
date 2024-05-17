import { getGreetingText } from './get-greeting-text.js'

// 🐨 First, start from storing the original value of
// `globalThis.navigator.languages` in a variable called `originalLanguages`.

// 🐨 Add the "afterEach" hook that will reset the value of the
// `globalThis.navigator.languages` to the `originalLanguages`.
// Use `Object.defineProperty(object, property, descriptor)` to do that.
// 💰 afterEach(callback)
// 💰 Object.defineProperty(globalThis.navigator, 'languages', {
//   value: originalLanguages,
// })

test('returns a user greeting in Spanish', () => {
  // 🐨 In this test, set the value of the `languages` to equal
  // to `['es']` before calling `getGreetingText`.
  // Use the same `Object.defineProperty` function you used in the "afterEach" hook.
  //
  // 🐨 Write an assertion for the `getGreetingText` function call
  // returning the string '¡Hola, Sarah!'.
  // 💰 expect(actual).toBe(expected)
})

// Leave this test as is, but it must still pass!
test('returns a user greeting in English by default', () => {
  expect(getGreetingText('Kody')).toBe('Hello, Kody!')
})
