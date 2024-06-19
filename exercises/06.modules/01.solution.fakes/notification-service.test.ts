import { EmailService } from './email-service.js'
import { NotificationService } from './notification-service.js'

class MockEmailService implements EmailService {
  send = vi.fn<
    Parameters<typeof EmailService.prototype.send>,
    ReturnType<typeof EmailService.prototype.send>
  >()
}

test('returns null if the user does not want to receive emails', async () => {
  const service = new NotificationService(new MockEmailService())

  await expect(
    service.sendEmail({
      to: 'kody@epicweb.dev',
      subject: 'Test',
      body: 'Hello world!',
    }),
  ).resolves.toBeNull()
})

test('returns email ID if the user agreed to receiving emails', async () => {
  const emailService = new MockEmailService()
  emailService.send.mockResolvedValue({
    id: '123e4567-e89b-12d3-a456-426614174000',
  })

  const service = new NotificationService(emailService, {
    emails: true,
  })

  await expect(
    service.sendEmail({
      to: 'kody@epicweb.dev',
      subject: 'Test',
      body: 'Hello world!',
    }),
  ).resolves.toBe('123e4567-e89b-12d3-a456-426614174000')
})
