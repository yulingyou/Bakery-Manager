const Baker = require("../../models/baker");
const BakersController = require("../../controllers/bakers")

describe("BakersController", () => {

  it("should return all confirmed orders", async () => {
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

  it("should throw error when retrieving confirmed orders", async () => {
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const mockError = new Error("Error retrieving confirmed orders");
    Baker.find = jest.fn((cb) => cb(mockError));

    await BakersController.getAll(null, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ message: mockError.message });
  });
})
