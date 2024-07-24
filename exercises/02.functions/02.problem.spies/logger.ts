export class Logger {
  public log(event: string, metadata: Record<string, unknown>) {
    console.log(event)
    console.table(metadata)
  }
}
