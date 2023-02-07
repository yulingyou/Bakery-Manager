const mongoose = require("mongoose");
const Baker = require('../../models/baker')

describe("Baker Model", () => {
  beforeEach(() => {
    const MongoClient = require("mongodb").MongoClient;
    const uri =
  "mongodb+srv://<admin>:<F2M2qX-$uHm6d$F>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.close();
  })

  it("has a confirmed order", () => {
    const baker = new Baker({
      confirmedOrder: ["Muffin", "Cookies"],
      orderId: "19326592816",
    });
    expect(baker.confirmedOrder).toEqual(["Muffin", "Cookies"]);
  });

  it('should have a field orderId with reference to Order', () => {
    const baker = new Baker({ orderId: mongoose.Types.ObjectId(), confirmedOrder: [] });

    expect(baker.orderId).toBeDefined();
    expect(baker.orderId).toBeInstanceOf(mongoose.Types.ObjectId);
  });

  it('should have a field confirmedOrder', async () => {
    const baker = new Baker({ orderId: mongoose.Types.ObjectId(), confirmedOrder: [] });

    expect(baker.confirmedOrder).toBeDefined();
    expect(baker.confirmedOrder).toBeInstanceOf(Array);
  });

  it('should validate that the orderId field is required', async () => {
    const baker = new Baker({});

    try {
      await baker.validate();
    } catch (error) {
      expect(error.errors.orderId).toBeDefined();
      expect(error.errors.orderId.message).toBe('Order ID is required');
    }
  });

  it('should validate that confirmedOrder is an array of strings', async () => {
    const baker = new Baker({ orderId: mongoose.Types.ObjectId(), confirmedOrder: 'not an array' });

    try {
      await baker.validate();
    } catch (error) {
      expect(error.errors.confirmedOrder).toBeDefined();
      expect(error.errors.confirmedOrder.message).toBe('Confirmed order must be an array of strings');
    }
  });
})