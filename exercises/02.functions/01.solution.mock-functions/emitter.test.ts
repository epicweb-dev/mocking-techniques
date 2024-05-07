import { Emitter } from './emitter.js'

it('invokes the listener whenever a matching event is emitted', () => {
  const emitter = new Emitter<{ hello: [firstName: string] }>()
  const listener = vi.fn()

  emitter.on('hello', listener)
  emitter.emit('hello', 'John')

  expect(listener).toHaveBeenCalledOnce()
  expect(listener).toHaveBeenCalledWith('John')
})
