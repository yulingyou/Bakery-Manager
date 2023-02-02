const mongoose = require('mongoose');
const Baker = require('../../models/baker');

// const { STATUS, USERNAME, PASSWORD, DATABASE } = process.env;
require('dotenv').config({path: '../env.test'});


describe('BakersController', () => {
  let connection;
  let db;
  let bakersController;

  beforeAll(async () => {
    mongoose.set('strictQuery', false);
    const mongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ds0ycgm.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
    connection = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = mongoose.connection;
    bakersController = require('../../controllers/bakers');
  });

  afterAll(async () => {
    await db.dropDatabase();
    await connection.close();
  });

  describe('getAll', () => {
    it('should return all confirmed orders', async () => {
      const sampleData = [
        {
          order: 'Bread',
        },
        {
          order: 'Cake',
        },
      ];
      await Baker.insertMany(sampleData);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      bakersController.getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ confirmedOrder: sampleData });
    });
  });
});