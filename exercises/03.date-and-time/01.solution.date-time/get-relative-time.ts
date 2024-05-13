/**
 * Return a relative time string from a given date.
 */
export function getRelativeTime(date: Date): string {
  const delta =
    Math.floor(Date.now() / 1000) - Math.floor(date.getTime() / 1000)

  const formatString = (value: number, unit: string): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'unit',
      unit,
      unitDisplay: 'long',
    }).format(value)
  }

  switch (true) {
    case delta < 60: {
      return `Just now`
    }
    case delta < 3600: {
      const minutes = Math.floor(delta / 60)
      return `${formatString(minutes, 'minute')} ago`
    }
    case delta < 86_400: {
      const hours = Math.floor(delta / 3600)
      return `${formatString(hours, 'hour')} ago`
    }
    case delta < 2_620_800: {
      const days = Math.floor(delta / 86_400)
      return `${formatString(days, 'day')} ago`
    }
    case delta < 31_449_600: {
      const months = Math.floor(delta / 2_620_800)
      return `${formatString(months, 'month')} ago`
    }
    default: {
      const years = Math.floor(delta / 31_449_600)
      return `${formatString(years, 'year')} ago`
    }
  }
}
