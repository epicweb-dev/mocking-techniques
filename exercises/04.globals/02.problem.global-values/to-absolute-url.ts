/**
 * Returns absolute URL from the given URL.
 */
export function toAbsoluteUrl(url: string): string {
  return new URL(url, location.href).href
}
