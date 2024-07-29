function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}

export class Emitter<EventMap extends Record<string, Array<unknown>>> {
  private listeners: Map<
    keyof EventMap,
    Array<(...args: Array<unknown>) => void>
  > = new Map()

  public on<Event extends keyof EventMap>(
    event: Event,
    listener: (...args: EventMap[Event]) => void,
  ): this {
    if (isDevelopment()) {
      console.log(`adding listener for "${event.toString()}" event...`)
    }

    const prevListeners = this.listeners.get(event) || []
    const nextListeners = prevListeners.concat(listener)
    this.listeners.set(event, nextListeners)
    return this
  }

  public emit<Event extends keyof EventMap>(
    event: Event,
    ...data: EventMap[Event]
  ): boolean {
    const listeners = this.listeners.get(event) || []

    if (isDevelopment()) {
      console.log(
        `emitting listeners for "${event.toString()}" event (${
          listeners.length
        })`,
      )
    }

    for (const listener of listeners) {
      listener.apply(this, data)
    }
    return listeners.length > 0
  }
}
