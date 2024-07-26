beforeAll(() => {
  vi.stubEnv('ENV_VAR', 'mock-value')
})

afterAll(() => {
  vi.unstubAllEnvs()
})

it('', () => {
  //
})
