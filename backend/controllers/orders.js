const Order = require("../models/order");
const TokenGenerator = require("../models/token_generator");
const jwt = require("jsonwebtoken");

const OrdersController = {
  getAll: (req, res) => {
    console.log("GET ORDERS")
    Order.find(async (err, orders) => {
      if (err) {
        console.log(err)
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      console.log("orders:", orders)
      res.status(200).json({ orders:  orders, token: token });
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
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      const allOrders = await Order.find()
      res.status(201).json({Order: allOrders, token: token});
    }
  )},
}


module.exports = OrdersController