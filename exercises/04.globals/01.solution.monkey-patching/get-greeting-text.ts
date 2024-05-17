/**
 * Return a greeting text for the given `name`.
 * Respects the client's locale.
 */
export function getGreetingText(name: string): string {
  if (navigator.languages.includes('es')) {
    return `¡Hola, ${name}!`
  }

  return `Hello, ${name}!`
}
