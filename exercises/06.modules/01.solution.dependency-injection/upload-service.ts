import { FileStorage } from './file-storage.js'

export class UploadService {
  private maxChunkSize: number
  private storage: FileStorage

  constructor(args: { storage: FileStorage; maxChunkSize: number }) {
    this.storage = args.storage
    this.maxChunkSize = args.maxChunkSize
  }

  public async upload(file: File): Promise<Array<ArrayBuffer>> {
    const chunks =
      file.size > this.maxChunkSize
        ? splitByChunks(this.maxChunkSize, file)
        : [file]

    await this.storage.setItem(
      file.name,
      await Promise.all(chunks.map((chunk) => chunk.arrayBuffer())),
    )

    return this.storage.getItem(file.name)
  }
}

function splitByChunks(chunkSize: number, blob: Blob): Array<Blob> {
  const chunkCount = Math.ceil(blob.size / chunkSize)

  return Array.from({ length: chunkCount }).map((_, index) => {
    const start = index * chunkSize
    const end = start + chunkSize
    return blob.slice(start, end, blob.type)
  })
}
