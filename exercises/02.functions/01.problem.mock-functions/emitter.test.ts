import { Emitter } from './emitter.js'

it('invokes the listener whenever a matching event is emitted', () => {
  // We have an emitter that can emit and handle the "hello" event,
  // accepting a "firstName" string as the event data.
  const emitter = new Emitter<{ hello: [firstName: string] }>()

  // 🐨 Create a mock function called "listener" using "vi.fn()".

  // 🐨 Add a listener for the "hello" event using the mock function
  // as the listener.
  // 💰 emitter.on(event, listener)

  // 🐨 Emit the "hello" event with the name "John" as an argument.
  // 💰 emitter.emit(event, firstName)

  // 🐨 Write an assertion for the mock "listener" function
  // to have been called once.
  // 💰 expect(fn).toHaveBeenCalledOnce()

  // 🐨 Write another assertion for the mock "listener" function
  // to have been called with the string "John" as an argument.
  // 💰 expect(fn).toHaveBeenCalledWith(arg1, arg2, ...)
})
