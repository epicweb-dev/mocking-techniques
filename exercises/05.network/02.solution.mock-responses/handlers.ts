import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('https://api.example.com/auth', () => {
    return HttpResponse.json({
      token: 'abc-123',
    })
  }),
]
