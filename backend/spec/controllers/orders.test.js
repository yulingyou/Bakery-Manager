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
  describe("createOrder", () => {
    xit('should add a new ID to a list of all orders', async () => {
      const mockRequest = { body: { "orders": ['1', '2','3']} };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
  
      await OrdersController.createOrder(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({ Order: [order] });
    });
  });
  describe('getBatch', () => {
    it("should return a batch", async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const mockOrder = {"_id": "1",  
      "batch_quantity": 5,
      "price_per_batch": 32};
      Order.find = jest.fn((cb) => cb(null, mockOrder));
      
      await OrdersController.getAll(null, mockResponse);
      
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({"orders": mockOrder});
    })
  });
  describe("getBasketInfoByID", () => {
   xit("should return all items in a basket", async () => {

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockRequest = { params: {"id": '10'} };
      // const mockRequest = {
      //   params: jest.fn().mockReturnThis()
      // };

      const mockBasket =  {
        "_id": "10",
        "orders": [
            {
                "_id": "1",
                "item": "Blueberry Muffin",
                "batch_quantity": 19,
                "price_per_batch": 10,
              },
              {
                "_id": "2",
                "item": "Raspberry Muffin",
                "batch_quantity": 5,
                "price_per_batch": 32,
            }
        ],
      }

      Order.find = jest.fn((cb) => cb(null, mockBasket));
      
      await OrdersController.getBasketInfoByID(mockRequest, mockResponse);
      
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith({"orders": mockBasket});

    })
  })
});