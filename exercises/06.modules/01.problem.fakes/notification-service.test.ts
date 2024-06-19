import { EmailService } from './email-service.js'
import { NotificationService } from './notification-service.js'

// 🐨 Create a new class called `MockEmailService`
// that implements the `EmailService` interface.
// 💰 class Child implements Parent {}

// 🐨 In the fake `MockEmailService` class, create a
// method called `send` and assign a mock function to it.
// Provide the correct types for the `send` method's
// parameters and return type.
// 💰 class MockEmailService implements EmailService {
//  send = vi.fn<Parameters, ReturnType>()
// }

test('returns null if the user does not want to receive emails', async () => {
  // 🐨 Create a new variable called `service` and assign it
  // a new instance of the `NotificationService` class.
  // Provide the `MockEmailService` instance as the first argument to the
  // `NotificationService` constructor.
  // 💰 const service = new NotificationService(...)
  //
  // 🐨 Write an assertion that executes the `service.sendEmail()` method
  // to send an email to "kody@epicweb.dev" with the subject "Test" and body "Hello world!". Assert that the email promise resolves to null.
  // 💰 await expect(promise).resolves.toBeNull()
})

test('returns email ID if the user agreed to receiving emails', async () => {
  // 🐨 In this case, create a new variable called `emailService`
  // and assign it a new instance of the `MockEmailService` class.
  // 💰 const emailService = new MockEmailService()
  //
  // 🐨 Mock the resolved value of the `emailService.send` method
  // to return a fixed email ID.
  // 💰 method.mockResolvedValue(value)
  // 💰 { id: '123e4567-e89b-12d3-a456-426614174000' }
  //
  // 🐨 Create a new variable called `service` and assign it
  // a new instance of the `NotificationService` class. Provide the
  // previously created `emailService` as the first argument to the
  // `NotificationService` constructor.
  // Provide the user preferences object with the key "emails: true"
  // as the second argument to the `NotificationService` constructor.
  // 💰 const service = new NotificationService(emailService, { emails: true })
  //
  // 🐨 Write an assertion that executes the `service.sendEmail()` method
  // with the same arguments as in the previous test.
  // In this one, however, assert that the promise resolves to the email ID.
  // Use the same ID as in the `emailService.send` mock.
  // 💰 expect(promise).resolves.toBe(id)
})
