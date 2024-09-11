import { FileStorage } from './file-storage.js'
import { UploadService } from './upload-service.js'

class FakeFileStorage implements FileStorage {
  private data = new Map<string, Array<ArrayBuffer>>()

  public setItem(key: string, value: Array<ArrayBuffer>): Promise<void> {
    this.data.set(key, value)
    return Promise.resolve()
  }

  public getItem(key: string): Promise<Array<ArrayBuffer> | undefined> {
    return Promise.resolve(this.data.get(key))
  }
}

test('stores a small file in a single chunk', async () => {
  const storage = new FakeFileStorage()
  const uploadService = new UploadService({
    storage,
    maxChunkSize: 5,
  })

  const storedItem = await uploadService.upload(
    new File(['hello'], 'hello.txt'),
  )

  const chunks = storedItem.map((chunk) => Buffer.from(chunk).toString())

  expect(chunks).toEqual(['hello'])
})

test('splits a large file in multiple chunks', async () => {
  const storage = new FakeFileStorage()
  const uploadService = new UploadService({
    storage,
    maxChunkSize: 5,
  })

  const storedItem = await uploadService.upload(
    new File(['hello-world'], 'hello.txt'),
  )

  const chunks = storedItem.map((chunk) => Buffer.from(chunk).toString())

  expect(chunks).toEqual(['hello', '-worl', 'd'])
})
