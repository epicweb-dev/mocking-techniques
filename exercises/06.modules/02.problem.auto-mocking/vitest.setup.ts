// You can ignore this file.
// This is a custom setup to make sure that the "./logger.js"
// module is, indeed, mocked, and no `console.log` calls are
// produced during the entire test run. You DON'T need this
// kind of setup in your project.

beforeAll(() => {
  vi.spyOn(console, 'log')
})

afterEach(() => {
  expect(console.log).not.toHaveBeenCalled()
})
