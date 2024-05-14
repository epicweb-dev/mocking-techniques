/**
 * Debounce the given callback function.
 */
export function debounce<Args extends Array<unknown>>(
  callback: (...args: Args) => unknown,
  duration: number,
): (...args: Args) => void {
  let timeout: NodeJS.Timeout | null = null

  return function (...args) {
    const effect = () => {
      timeout = null
      return callback.apply(this, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}
