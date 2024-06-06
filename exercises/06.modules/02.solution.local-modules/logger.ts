class Logger {
  public info(message: string, metadata?: Record<string, unknown>) {
    console.log(message)
  }

  public warn(message: string, metadata?: Record<string, unknown>) {
    console.warn(message)
  }

  public error(message: string, metadata?: Record<string, unknown>) {
    console.error(message)
  }
}

export const logger = new Logger()
