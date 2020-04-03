const request = require('supertest');
const app = require('../../scr/app');
const connection = require('../../scr/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

afterAll(async () => {
   await connection.destroy();
})


  it('shoud be able to create a new  ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      
        name: "ong",
        email:"contato@gmail.com",
        whatsapp:"71000000000",
        city:"Salvador",
        uf:"BA"
    })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});