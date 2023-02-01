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

  getBakerById: (req, res, next) => {
    try {
      const baker = Baker.findById(req.params.id);
      if (baker == null) {
        return res.status(404).json({ message: "Cannot find baker" });
      }
      res.baker = baker;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  
  // getByBakerId: (req, res) => {
  //   console.log("Confirm order")
  //   const orderId = req.order._id
  //   Baker.find(async (err, orders) => {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log("Orders:", orders)
  //     res.status(200).json({ orders:  orders });
  //   });
  // },
}


module.exports = OrdersController