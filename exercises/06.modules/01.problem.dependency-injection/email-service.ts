export interface SendEmailOptions {
  to: string
  subject: string
  body: string
}

export class EmailService {
  public async send(options: SendEmailOptions): Promise<{ id: string }> {
    throw new Error(`Must not send actual email to "${options.to}"`)
  }
}
