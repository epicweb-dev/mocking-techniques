import { http } from 'msw'

export const handlers = [
  http.post('https://api.example.com/auth', () => {
    return Response.json({
      token: 'abc-123',
    })
  }),
]
