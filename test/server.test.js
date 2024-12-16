// test/server.test.js
const request = require('supertest');
const { app, server } = require('../server');  // Import both app and server

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});

afterAll(async () => {
  await server.close();  // Close the server after all tests
});
