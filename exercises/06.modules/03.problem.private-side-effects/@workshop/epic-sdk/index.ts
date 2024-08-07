import { initTelemetry } from './telemetry.js'

const telemetry = initTelemetry()
await telemetry.record('start', null)

export async function queryTable<T>(
  tableName: string,
  query: { where: any },
): Promise<T> {
  await telemetry.record('queryTable', { tableName, query })
  throw new Error(`Querying "${tableName}" in tests is not allowed!`)
}
