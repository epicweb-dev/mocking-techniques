import { Logger } from './logger.js'

export class UserService {
  constructor(private logger: Logger) {}

  public async createUser(initialState: { id: string; name: string }) {
    this.logger.log('createUser', { id: initialState.id })

    if (!/^\w{3}-\d{3}$/.test(initialState.id)) {
      throw new Error(
        `Failed to create a user: incorrect ID ("${initialState.id}")`,
      )
    }

    return initialState
  }
}
