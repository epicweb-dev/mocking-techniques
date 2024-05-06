export class Emitter<EventMap extends Record<string, Array<unknown>>> {
  private listeners: Map<
    keyof EventMap,
    Array<(...args: Array<unknown>) => void>
  > = new Map()

  /**
   * Add listener for the given event.
   *
   * @example
   * const emitter = new Emitter<{ foo: [number] }>()
   * emitter.on('foo', (data) => console.log(data))
   */
  public on<Event extends keyof EventMap>(
    event: Event,
    listener: (...args: EventMap[Event]) => void,
  ): this {
    const prevListeners = this.listeners.get(event) || []
    const nextListeners = prevListeners.concat(listener)
    this.listeners.set(event, nextListeners)
    return this
  }

  /**
   * Emit an event. This invokes all the listeners
   * assigned for that event.
   * @return {boolean} True if the emitted event has listeners.
   *
   * @example
   * const emitter = new Emitter<{ foo: [number] }>()
   * emitter.emit('foo', 123)
   */
  public emit<Event extends keyof EventMap>(
    event: Event,
    ...data: EventMap[Event]
  ): boolean {
    const listeners = this.listeners.get(event) || []
    for (const listener of listeners) {
      listener.apply(this, data)
    }
    return listeners.length > 0
  }
}
