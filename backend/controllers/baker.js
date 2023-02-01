const Baker = require("../models/baker");

const BakerController = {
  getAll: (req, res) => {
    console.log("GET Bakers")
    Baker.find(async (err, orders) => {
      if (err) {
        throw err;
      }
      console.log("Orders:", orders)
      res.status(200).json({ orders:  orders });
    });
  },

  getByBakerId: (req, res) => {
    console.log("Confirm order")
    Baker.find(async (err, orders) => {
      if (err) {
        throw err;
      }
      console.log("Orders:", orders)
      res.status(200).json({ orders:  orders });
    });
  },
}


module.exports = OrdersController