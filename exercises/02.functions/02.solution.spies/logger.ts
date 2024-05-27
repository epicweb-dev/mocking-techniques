export class Logger {
  public log(event: string, metadata: Record<string, unknown>) {
    throw new Error('Logger#log must not be called in test')
  }
}
