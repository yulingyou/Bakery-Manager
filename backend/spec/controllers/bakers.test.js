const Baker = require("../../models/baker");
const BakersController = require("../../controllers/bakers")

describe("BakersController", () => {
  describe('getAll', () => {

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
  });
  describe('getAll', () => {
    let mockReq, mockRes, mockNext;

    beforeEach(() => {
      mockReq = {
        params: {
          id: "88"
        }
      };
      mockRes = {
        confirmedOrder: null,
        status: jest.fn().mockReturnValue({
          json: jest.fn()
        })
      };
      mockNext = jest.fn();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should return the confirmed order if found', async () => {
      const mockOrder = { confirmedOrder: "Muffin" };
      Baker.findById = jest.fn(() => mockOrder);

      await BakersController.getBakerById(mockReq, mockRes, mockNext);

      expect(mockRes.baker).toEqual(mockOrder);
      expect(mockNext).toHaveBeenCalled();
      expect(Baker.findById).toHaveBeenCalledWith("88");
    });

    it('should return 404 if order is not found', async () => {
      Baker.findById.mockImplementation(() => {
        return null;
      });

      await BakersController.getBakerById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.status().json).toHaveBeenCalledWith({ message: 'Cannot find order' });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should return 500 on error', async () => {
      Baker.findById.mockImplementation(() => {
        throw new Error('Error finding order');
      });

      await BakersController.getBakerById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.status().json).toHaveBeenCalledWith({ message: 'Error finding order' });
    });

  });
});