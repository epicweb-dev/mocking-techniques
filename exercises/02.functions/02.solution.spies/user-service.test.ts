import { Logger } from './logger.js'
import { UserService } from './user-service.js'

test('logs out the "createUser" event when creating a new user', async () => {
  const logger = new Logger()
  vi.spyOn(logger, 'log')
  const service = new UserService(logger)

  await service.createUser({
    id: 'abc-123',
    name: 'John',
  })

  expect(logger.log).toHaveBeenCalledWith('createUser', { id: 'abc-123' })
  expect(logger.log).toHaveBeenCalledOnce()
})
