/**
 * Return a relative time string from a given date.
 */
export function getRelativeTime(date: Date): string {
  const delta =
    Math.floor(Date.now() / 1000) - Math.floor(date.getTime() / 1000)

  /**
   * Use the standard `Intl.RelativeTimeFormat` API to produce human-friendly relative time strings.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
   */
  const formatter = new Intl.RelativeTimeFormat('en', { style: 'long' })

  switch (true) {
    case delta < 60: {
      return `Just now`
    }
    case delta < 3600: {
      return formatter.format(-Math.floor(delta / 60), 'minute')
    }
    case delta < 86_400: {
      return formatter.format(-Math.floor(delta / 3600), 'hour')
    }
    case delta < 2_620_800: {
      return formatter.format(-Math.floor(delta / 86_400), 'day')
    }
    case delta < 31_449_600: {
      return formatter.format(-Math.floor(delta / 2_620_800), 'month')
    }
    default: {
      return formatter.format(-Math.floor(delta / 31_449_600), 'year')
    }
  }
}
