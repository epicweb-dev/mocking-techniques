import { getRelativeTime } from './get-relative-time.js'

// 🐨 Add the `beforeAll()` hook and tell Vitest to use the "fake" timers
// by calling `vi.useFakeTimers()` in it.
// 💰 beforeAll(callback)

// 🐨 Add the `afterAll()` hook and tell Vitest to use the "real" timers
// by calling `vi.useRealTimers()` in it.
// 💰 afterAll(callback)

test('returns "Just now" for the current date', () => {
  // 🐨 Mock the date to always be the midnight of the 1st of June.
  // 🐨 Use the `vi.setSystemTime()` utility to mock the current date.
  // You can use "2024-06-01 00:00:00.000Z" as the mock date.
  // 💰 vi.setSystemTime(mockDate)
  //
  // 🐨 Call the "getRelativeTime()" function with 2024-06-01 00:00:00.000Z
  // and assert that it returned a string that says "Just now".
  // 💰 expect(getRelativeTime(date)).toBe(expected)
})

test('returns "minute ago" for a date a minute ago', () => {
  // 🐨 Using the previous test as example, mock the system time
  // to be anywhere between 00:00:01 and 01:00:00 on 2024-06-01.
  //
  // 🐨 Call the "getRelativeTime()" function with "2024-06-01 00:00:00.000Z"
  // and assert that it returned a string that says "1 minute ago".
  // 💰 expect(getRelativeTime(date)).toBe(expected)
})

// 🐨 Add tests for as many usage scenarios for the "getRelativeTime()"
// function as you can think of! If unsure, don't worry and leave this
// last task item blank.
