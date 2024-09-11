export class UploadService {
  constructor(private storage: FileStorage) {}

  public async upload(file: File) {
    await this.storage.setItem(file.name, await file.arrayBuffer())
  }
}

class FileStorage {
  public setItem(key: string, value: ArrayBuffer) {
    return Promise.resolve()
  }
}
