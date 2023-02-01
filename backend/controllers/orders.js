const Order = require("../models/order");

const OrdersController = {
  getAll: (req, res) => {
    console.log("GET ORDERS")
    Order.find(async (err, orders) => {
      if (err) {
        throw err;
      }
      console.log("orders:", orders)
      res.status(200).json({ orders:  orders });
    });
  },
  createOrder: (req, res) => {
    console.log("POST ORDER")
    const order = new Order(req.body);
    console.log("NEW ORDER: ", order)
    order.save(async (err) => {
      if (err) {
        throw err;
      }
      const allOrders = await Order.find()
      res.status(201).json({Order: allOrders});
    }
  )},
}


module.exports = OrdersController