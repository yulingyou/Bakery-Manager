const Baker = require("../../models/baker");
const BakersController = require("../../controllers/bakers")
require('dotenv').config({path: './.env.test'});
const app = require("../../index");

describe("BakersController", () => {
  it("should return all bakers", async () => {
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockOrders = [{confirmedOrder: "1"}, {confirmedOrder: "2"}];
    Baker.find = jest.fn((cb) => cb(null, mockOrders));

    await BakersController.getAll(null, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ confirmedOrder: mockOrders });
  })
})