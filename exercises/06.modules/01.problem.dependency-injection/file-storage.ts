const STORAGE_URL = 'https://example.com/storage/'

export class FileStorage {
  public async setItem(key: string, value: Array<ArrayBuffer>): Promise<void> {
    const stream = new ReadableStream({
      start(controller) {
        value.forEach((chunk) => controller.enqueue(chunk))
        controller.close()
      },
    })

    await fetch(new URL(`files/${key}`, STORAGE_URL), {
      method: 'POST',
      body: stream,
    })
  }

  public async getItem(key: string): Promise<Array<ArrayBuffer> | undefined> {
    const response = await fetch(new URL(`/files/${key}`, STORAGE_URL))

    if (!response.ok) {
      throw new Error(`Failed to retrieve uploaded file by key "${key}`)
    }

    if (!response.body) {
      return
    }

    const chunks: Array<ArrayBuffer> = []
    const reader = response.body.getReader()

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      chunks.push(value)
    }

    return chunks
  }
}
