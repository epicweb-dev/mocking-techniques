import { EmailService, type SendEmailOptions } from './email-service.js'

export class NotificationService {
  constructor(
    private emailService: EmailService,
    private preferences?: { emails?: boolean },
  ) {}

  public async sendEmail(options: SendEmailOptions): Promise<string | null> {
    if (!this.preferences?.emails) {
      return null
    }

    const { id } = await this.emailService.send(options)

    return id
  }
}
