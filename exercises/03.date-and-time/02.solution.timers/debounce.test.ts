import { debounce } from './debounce.js'

beforeAll(() => {
  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

test('executes the callback after the debounce timeout passes', () => {
  const fn = vi.fn<(input: string) => void>()
  const debouncedFn = debounce(fn, 250)

  debouncedFn('one')
  expect(fn).not.toHaveBeenCalled()

  vi.advanceTimersByTime(250)

  expect(fn).toHaveBeenCalledOnce()
  expect(fn).toHaveBeenCalledWith('one')
})

test('debounces the callback until the timeout passes since the last call', () => {
  const fn = vi.fn<(input: string) => void>()
  const debouncedFn = debounce(fn, 250)

  debouncedFn('one')
  expect(fn).not.toHaveBeenCalled()

  vi.advanceTimersByTime(100)

  debouncedFn('two')
  expect(fn).not.toHaveBeenCalled()

  vi.advanceTimersByTime(250)

  expect(fn).toHaveBeenCalledOnce()
  expect(fn).toHaveBeenCalledWith('two')
})
