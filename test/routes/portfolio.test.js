import supertest from 'supertest'

// server
import Server from '../../src/models/server'

// utils
import { isValidObjectId } from '../utilities/mongo'
import { isValidURL, isValidEmail } from '../utilities/regex'

// constants
const server = new Server()
const api = supertest(server.app)

// ------------------------------------------------

beforeAll(async () => {
  await server.listen()
})

test('GET Page Info', async () => {
  const responseApi = await api.get('/api/v1/portfolio/page-info')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const { body } = responseApi
  expect(body).toContainKeys(['status', 'message', 'meta'])

  const { status, message, meta } = body
  expect(status).toBe('success')
  expect(message).toBe('Portfolio cargado')
  expect(meta).toContainKeys(['_id', 'address', 'backgroundInformation', 'email', 'role', 'heroImage', 'heroImage2', 'name', 'phoneNumber', 'profilePic'])

  const { _id, address, backgroundInformation, email, role, heroImage, heroImage2, name, phoneNumber, profilePic } = meta

  expect(isValidObjectId(_id)).toBe(true)
  expect(address).toBeString()
  expect(backgroundInformation).toBeString()
  expect(isValidEmail(email)).toBe(true)
  expect(role).toBeString()
  expect(isValidURL(heroImage)).toBe(true)
  expect(isValidURL(heroImage2)).toBe(true)
  expect(name).toBeString()
  expect(phoneNumber).toBeString()
  expect(isValidURL(profilePic)).toBe(true)
})

afterAll(async () => {
  server.server.close()
})
