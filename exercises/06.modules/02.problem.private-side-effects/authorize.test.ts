import { authorize, User } from './authorize.js'

// 🐨 Create a variable called `queryTableMock` and assign it
// a new mock function. Wrap that mock function in `vi.hoisted()` so
// it could be referenced in the `vi.mock()` call later.
// As a bonus task, annotate the mock function to match the `queryTable`
// function call signature (you may want to use the `User` type for that!).
// 💰 vi.fn<FunctionType>
// 💰 vi.hoisted(() => value)

// 🐨 Mock the `@workshop/epic-sdk` module by calling `vi.mock()`
// and providing it with the module import as the first argument.
// As the second argument, provide an empty function.
// 💰 vi.mock(import('dependency-name'), factoryFunction)

// 🐨 In the factory function to `vi.mock()`, return
// an object representing the module's exports. The object must
// include the `queryTable` property that equals to the `queryTableMock`
// mock function you've defined earlier.
// 💰 { queryTable: mockFunction }

// 🐨 Add the `afterEach()` hook and reset all mock functions there.
// 💰 afterEach(callback)
// 💰 vi.resetAllMocks()

test('returns the authorized user', async () => {
  // 🐨 Provide a mock resolved value to the `queryTableMock` mock function
  // to resolve with a user object.
  // 💰 mockFunction.mockResolvedValue(value)
  // You may use the following object as the mock user object:
  // 💰 { id: 'abc-123', name: 'Kody Koala" }
  //
  // 🐨 Write an assertion on the `authorize` function call
  // to ensure that it resolves to the mock user object correctly.
  // 💰 await expect(functionReturningPromise).resolves.toEqual(expected)
})

test('returns null if no user was found', async () => {
  // 🐨 Provide a mock resolved value to the `queryTableMock` mock function
  // to resolve with `null` as the value.
  //
  // 🐨 Write an assertion on the `authorize` function to ensure that
  // it resolves to `null` in this circumstance.
  // 💰 await expect(functionReturningPromise).resolves.toBeNull()
})

test('throws an error if querying the user failed', async () => {
  // 🐨 Provide a mock rejected value to the `queryTableMock` mock function
  // to reject it with an error.
  // 💰 mockFunction.mockRejectedValue(error)
  // You can use the following error as the rejection reason:
  // 💰 new Error('Original error')
  //
  // 🐨 Write an assertion on the `authorize` function to ensure that
  // it rejects with the custom error message in this circumstance.
  // 💰 await expect(functionReturningPromise).rejects.toThrow(error)
  // 🦉 Reference the `authorize` function implementation to see
  // the expected shape of the rejection error.
})
