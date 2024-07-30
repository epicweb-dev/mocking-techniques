import { getRelativeTime } from './get-relative-time.js'

beforeAll(() => {
  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

test('returns "Just now" for the current date', () => {
  vi.setSystemTime(new Date('2024-06-01 00:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe('Just now')
})

test('returns "Just now" for a date less than a minute ago', () => {
  vi.setSystemTime(new Date('2024-06-01 00:00:40.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe('Just now')
})

test('returns "minute ago" for a date a minute ago', () => {
  vi.setSystemTime(new Date('2024-06-01 00:01:05.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '1 minute ago',
  )
})

test('returns "minutes ago" for a date a few minutes ago', () => {
  vi.setSystemTime(new Date('2024-06-01 00:04:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '4 minutes ago',
  )
})

test('returns "hour ago" for a date an hour ago', () => {
  vi.setSystemTime(new Date('2024-06-01 01:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '1 hour ago',
  )
})

test('returns "hours ago" for a date a few hours ago', () => {
  vi.setSystemTime(new Date('2024-06-01 02:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '2 hours ago',
  )
})

test('returns "day ago" for a date a day ago', () => {
  vi.setSystemTime(new Date('2024-06-02 00:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '1 day ago',
  )
})

test('returns "days ago" for a date a few days ago', () => {
  vi.setSystemTime(new Date('2024-06-03 00:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '2 days ago',
  )
})

test('returns "month ago" for a date a month ago', () => {
  vi.setSystemTime(new Date('2024-07-02 00:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '1 month ago',
  )
})

test('returns "months ago" for a date a few months ago', () => {
  vi.setSystemTime(new Date('2024-09-01 00:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '3 months ago',
  )
})

test('returns "year ago" for a date a year ago', () => {
  vi.setSystemTime(new Date('2025-06-01 00:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '1 year ago',
  )
})

test('returns "years ago" for a date a few years ago', () => {
  vi.setSystemTime(new Date('2030-06-01 00:00:00.000Z'))
  expect(getRelativeTime(new Date('2024-06-01 00:00:00.000Z'))).toBe(
    '6 years ago',
  )
})
