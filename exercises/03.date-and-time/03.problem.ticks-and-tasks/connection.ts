export class Connection extends EventTarget {
  constructor() {
    super()
    queueMicrotask(() => {
      this.dispatchEvent(new Event('connection'))
    })
  }
}
