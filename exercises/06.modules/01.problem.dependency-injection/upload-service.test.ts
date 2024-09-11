import { FileStorage } from './file-storage.js'
import { UploadService } from './upload-service.js'

class FakeFileStorage implements FileStorage {
  // 🐨 In this `FakeFileStorage` class, declare a private variable called
  // `data`. Assign that variable to `new Map<string, Array<ArrayBuffer>>`.
  // 💰 private data = value
  //
  // 🐨 Declare a new public method called `setItem`.
  // This method accepts a `key` and `value` arguments.
  // Inside the method, set the `value` by the `key` on the
  // private `data` map. Finally, return an empty resolved promise.
  // 💰 public setItem(key: string, value: Array<ArrayBuffer>): Promise<void> {}
  // 💰 this.data.set(key, value)
  // 💰 return Promise.resolve()
  //
  // 🐨 Declare a new public method called `getItem`.
  // This method accepts a `key` argument.
  // Inside the method, return a resolved promise with the value
  // of getting the `key` from the private `data` map.
  // 💰 public getItem(key: string): Promise<Array<ArrayBuffer> | undefined> {}
  // 💰 Promise.resolve(this.data.get(key))
}

test('stores a small file in a single chunk', async () => {
  // 🐨 Create a new variable called `storage` and assign it
  // to a new instance of `FakeFileStorage`.
  // 💰 const storage = value
  const uploadService = new UploadService({
    // 🐨 Provide the fake `storage` instance as the value
    // of the `storage` property to the `UploadService`.
    // 💰 storage,
    maxChunkSize: 5,
  })

  const storedItem = await uploadService.upload(
    new File(['hello'], 'hello.txt'),
  )

  const chunks = storedItem.map((chunk) => Buffer.from(chunk).toString())

  // 🐨 Assert that the stored file `chunks` equal to an array
  // with a single item 'hello'.
  // 💰 expect(chunks).toEqual(expected)
})

test('splits a large file in multiple chunks', async () => {
  // 🐨 Similarly, declare a `storage` variable and assign it
  // a new instance of the `FakeFileStorage` class.
  // 💰 const storage = new FakeFileStorage()
  const uploadService = new UploadService({
    // 🐨 Provide the fake `storage` as the option here.
    // 💰 storage,
    maxChunkSize: 5,
  })

  const storedItem = await uploadService.upload(
    new File(['hello-world'], 'hello.txt'),
  )

  const chunks = storedItem.map((chunk) => Buffer.from(chunk).toString())

  // 🐨 Assert that the stored file `chunks` equal to an array
  // with three items: 'hello', '-worl', and 'd'.
  // 💰 expect(chunks).toEqual(expected)
})
