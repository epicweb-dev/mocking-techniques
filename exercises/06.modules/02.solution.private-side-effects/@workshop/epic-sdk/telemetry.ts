import { setTimeout } from 'node:timers/promises'

export function initTelemetry() {
  return {
    async record(event: string, data: Record<string, unknown> | null) {
      await setTimeout(6000)
    },
  }
}
