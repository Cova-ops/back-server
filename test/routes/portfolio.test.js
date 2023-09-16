import supertest from 'supertest'
import Server from '../../src/models/server'

const server = new Server()
const api = supertest(server.app)

beforeAll(async () => {
  await server.listen()
})

test('GET Page Info', async () => {
  const responseApi = await api.get('/api/v1/portfolio/page-info')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const { body } = responseApi
  console.log({ body })
  expect(body).toContainKeys(['status', 'message', 'meta'])

  const { status, message, meta } = body
  expect(status).toBe('success')
  expect(message).toBe('Portfolio cargado')
  expect(meta).toContainKeys(['address', 'backgroundInformation', 'email', 'role', 'heroImage', 'http', 'heroImage2', 'http', 'name', 'phoneNumber', 'profilePic'])
})

afterAll(async () => {
  server.server.close()
})
