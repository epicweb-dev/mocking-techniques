import { getRelativeTime } from './get-relative-time.js'

// 🐨 Add the "beforeAll" hook and tell Vitest to use the "fake" timers.
// 💰 beforeAll(callback)
// 💰 vi.useFakeTimers()

// 🐨 Add the "afterAll" hook and tell Vitest to use the "real" timers.
// 💰 afterAll(callback)
// 💰 vi.useRealTimers()

test('returns "Just now" for the current date', () => {
  // 🐨 Mock the date to always be the midnight of the 1st of June.
  // 💰 vi.setSystemTime(mockDate)
  // 💰 2024-06-01 00:00:00.000Z
  //
  // 🐨 Call the "getRelativeTime()" function with 2024-06-01 00:00:00.000Z
  // and assert that it returned "Just now".
  // 💰 expect(getRelativeTime(date)).toBe(expectedString)
})

test('returns "minute ago" for a date a minute ago', () => {
  // 🐨 Using the previous test as example, mock the system time
  // to be anywhere between 00:00:01 and 01:00:00 on 2024-06-01.
  //
  // 🐨 Call the "getRelativeTime()" function with 2024-06-01 00:00:00.000Z
  // and assert that it returned "1 minute ago".
  // 💰 expect(getRelativeTime(date)).toBe(expectedString)
})

// 🐨 Add tests for as many usage scenarios for the "getRelativeTime()"
// function as you can think of! If unsure, don't worry and leave this
// last task item blank.
