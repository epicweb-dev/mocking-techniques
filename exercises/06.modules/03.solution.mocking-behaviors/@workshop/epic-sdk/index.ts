export const api = {
  async queryTable<T>(tableName: string, primaryKey: string): Promise<T> {
    throw new Error(`Querying "${tableName}" in tests is not allowed!`)
  },
}
