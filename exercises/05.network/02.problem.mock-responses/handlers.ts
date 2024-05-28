import { http } from 'msw'

export const handlers = [
  // 💣 Remove this request handler.
  http.all('*', ({ request }) => {
    console.log(request.method, request.url)
  }),

  // 🐨 Create a new request handler for the
  // "POST https://api.example.com/auth" request.
  // 💰 http.post(path, resolver)
  //
  // 🐨 In the response resolver to the new request handler,
  // return a new Response instance with the expected
  // JSON body: { token: "abc-123" }
  // 💰 Response.json(body)
]
