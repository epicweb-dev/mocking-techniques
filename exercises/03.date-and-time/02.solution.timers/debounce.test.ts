import { debounce } from './debounce.js'

beforeAll(() => {
  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

test('executes the callback after the debounce timeout passes', () => {
  const fn = vi.fn<[number]>()
  const debouncedFn = debounce(fn, 250)

  debouncedFn(1)
  expect(fn).not.toHaveBeenCalled()

  vi.advanceTimersByTime(250)

  expect(fn).toHaveBeenCalledOnce()
  expect(fn).toHaveBeenCalledWith(1)
})

test('debounces the callback until the timeout passes since the last call', () => {
  const fn = vi.fn<[number]>()
  const debouncedFn = debounce(fn, 250)

  debouncedFn(1)
  expect(fn).not.toHaveBeenCalled()

  vi.advanceTimersByTime(100)

  debouncedFn(2)
  expect(fn).not.toHaveBeenCalled()

  vi.advanceTimersByTime(250)

  expect(fn).toHaveBeenCalledOnce()
  expect(fn).toHaveBeenCalledWith(2)
})
