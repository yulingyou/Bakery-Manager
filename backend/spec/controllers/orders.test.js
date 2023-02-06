const Order = require("../../models/order");
const OrdersController = require("../../controllers/orders")
require('dotenv').config({path: './.env.test'});

describe("OrdersController", () => {
  describe('getAll', () => {

    it("should return IDs of all orders", async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const mockOrders = ["1","2"];
      Order.find = jest.fn((cb) => cb(null, mockOrders));
      
      await OrdersController.getAll(null, mockResponse);
      
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({"orders": mockOrders});
    })
  });
  describe('createOrder', () => {
    it("should add a new ID to a list of all orders", async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      
      const mockOrders = ["1","2"];
      Order.find = jest.fn((cb) => cb(null, mockOrders));
      
      // await OrdersController.createOrder("3", mockResponse);
      
      // expect(mockResponse.status).toHaveBeenCalledWith(201);
      // expect(mockResponse.json).toHaveBeenCalledWith({"orders": ["1","2","3"]});
    })
  })
  // describe('getAll', () => {
  //   let mockReq, mockRes, mockNext;

  //   beforeEach(() => {
  //     mockReq = {
  //       params: {
  //         id: "88"
  //       }
  //     };
  //     mockRes = {
  //       confirmedOrder: null,
  //       status: jest.fn().mockReturnValue({
  //         json: jest.fn()
  //       })
  //     };
  //     mockNext = jest.fn();
  //   });

  //   afterEach(() => {
  //     jest.resetAllMocks();
  //   });

  //   it('should return the confirmed order if found', async () => {
  //     const mockOrder = { confirmedOrder: "Muffin" };
  //     Baker.findById = jest.fn(() => mockOrder);

  //     await BakersController.getBakerById(mockReq, mockRes, mockNext);

  //     expect(mockRes.baker).toEqual(mockOrder);
  //     expect(mockNext).toHaveBeenCalled();
  //     expect(Baker.findById).toHaveBeenCalledWith("88");
  //   });

  //   it('should return 404 if order is not found', async () => {
  //     Baker.findById.mockImplementation(() => {
  //       return null;
  //     });

  //     await BakersController.getBakerById(mockReq, mockRes, mockNext);

  //     expect(mockRes.status).toHaveBeenCalledWith(404);
  //     expect(mockRes.status().json).toHaveBeenCalledWith({ message: 'Cannot find order' });
  //     expect(mockNext).not.toHaveBeenCalled();
  //   });

  //   it('should return 500 on error', async () => {
  //     Baker.findById.mockImplementation(() => {
  //       throw new Error('Error finding order');
  //     });

  //     await BakersController.getBakerById(mockReq, mockRes, mockNext);

  //     expect(mockRes.status).toHaveBeenCalledWith(500);
  //     expect(mockRes.status().json).toHaveBeenCalledWith({ message: 'Error finding order' });
  //   });

  // });
});