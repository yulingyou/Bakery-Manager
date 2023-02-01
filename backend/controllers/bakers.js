const Baker = require("../models/baker");

const BakersController = {
  getAll: (req, res) => {
    console.log("GET Bakers")
    Baker.find(async (err, bakers) => {
      if (err) {
        throw err;
      }
      console.log("Bakers:", bakers)
      res.status(200).json({ bakers:  bakers });
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
  },

  createBaker: (req, res) => {
    console.log("POST Baker")
    const baker = new Baker(req.body);
    console.log("NEW Baker: ", baker)
    baker.save(async (err) => {
      if (err) {
        throw err;
      }
      const allBakers = await Baker.find()
      res.status(201).json({bakers: allBakers});
    }
  )},
  
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


module.exports = BakersController