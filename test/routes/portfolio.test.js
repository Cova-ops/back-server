import supertest from 'supertest'

// server
import Server from '../../src/models/server'

// utils
import { isValidObjectId } from '../utilities/mongo'
import { isValidURL, isValidEmail, isValidUTCTime } from '../utilities/regex'

// constants
const server = new Server()
const api = supertest(server.app)

// ------------------------------------------------

beforeAll(async () => {
  await server.listen()
})

describe('FETCHING ALL INFO', () => {
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

    expect(_id).toSatisfy(isValidObjectId)
    expect(address).toBeString()
    expect(backgroundInformation).toBeString()
    expect(email).toSatisfy(isValidEmail)
    expect(role).toBeString()
    expect(heroImage).toSatisfy(isValidURL)
    expect(heroImage2).toSatisfy(isValidURL)
    expect(name).toBeString()
    expect(phoneNumber).toBeString()
    expect(profilePic).toSatisfy(isValidURL)
  })

  test('GET Skills', async () => {
    const responseApi = await api.get('/api/v1/portfolio/skills')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const { body } = responseApi
    expect(body).toContainKeys(['status', 'message', 'meta'])

    const { status, message, meta } = body
    expect(status).toBe('success')
    expect(message).toBe('Portfolio cargados')
    expect(meta).toBeArray()

    for (const skill of meta) {
      expect(skill).toContainKeys(['_id', 'image', 'progress', 'title'])
      const { _id, image, progress, title } = skill

      expect(_id).toSatisfy(isValidObjectId)
      expect(image).toSatisfy(isValidURL)
      expect(progress).toBeNumber()
      expect(title).toBeString()
    }
  })

  test('GET Projects', async () => {
    const responseApi = await api.get('/api/v1/portfolio/projects')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const { body } = responseApi
    expect(body).toContainKeys(['status', 'message', 'meta'])

    const { status, message, meta } = body
    expect(status).toBe('success')
    expect(message).toBe('Portfolio cargados')
    expect(meta).toBeArray()

    for (const project of meta) {
      expect(project).toContainKeys(['_id', 'image', 'linkToBuild', 'summary', 'technologies', 'title'])
      const { _id, image, linkToBuild, summary, technologies, title } = project

      expect(_id).toSatisfy(isValidObjectId)
      expect(image).toSatisfy(isValidURL)
      expect(linkToBuild).toSatisfy(isValidURL)
      expect(summary).toBeString()
      expect(title).toBeString()
      expect(technologies).toBeArray()

      for (const technology of technologies) expect(isValidObjectId(technology)).toBe(true)
    }
  })

  test('GET Work Experience', async () => {
    const responseApi = await api.get('/api/v1/portfolio/work-experience')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const { body } = responseApi
    expect(body).toContainKeys(['status', 'message', 'meta'])

    const { status, message, meta } = body
    expect(status).toBe('success')
    expect(message).toBe('Portfolio cargados')
    expect(meta).toBeArray()

    for (const workExperience of meta) {
      expect(workExperience).toContainKeys(['_id', 'company', 'companyImage', 'dateStarted', 'dateEnded', 'isCurrentlyWorkingHere', 'jobTitle', 'points', 'technologies'])
      const { _id, company, companyImage, dateStarted, dateEnded, isCurrentlyWorkingHere, jobTitle, points, technologies } = workExperience

      expect(_id).toSatisfy(isValidObjectId)
      expect(company).toBeString()
      expect(companyImage).toSatisfy(isValidURL)
      expect(dateStarted).toSatisfy(isValidUTCTime)
      expect(dateEnded).toSatisfy((date) => date === null || isValidUTCTime(date))
      expect(isCurrentlyWorkingHere).toBeBoolean()
      expect(jobTitle).toBeString()

      expect(points).toBeArray()
      for (const point of points) expect(point).toBeString()

      expect(technologies).toBeArray()
      for (const technology of technologies) expect(technology).toSatisfy(isValidObjectId)
    }
  })

  test('GET Social Media', async () => {
    const responseApi = await api.get('/api/v1/portfolio/social-media')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const { body } = responseApi
    expect(body).toContainKeys(['status', 'message', 'meta'])

    const { status, message, meta } = body
    expect(status).toBe('success')
    expect(message).toBe('Portfolio cargados')
    expect(meta).toBeArray()

    for (const socialMedia of meta) {
      expect(socialMedia).toContainKeys(['_id', 'title', 'url'])
      const { _id, title, url } = socialMedia

      expect(_id).toSatisfy(isValidObjectId)
      expect(title).toBeString()
      expect(url).toSatisfy(isValidURL)
    }
  })
})

afterAll(async () => {
  server.server.close()
})
