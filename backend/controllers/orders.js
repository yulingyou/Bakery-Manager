const Order = require("../models/order");
const TokenGenerator = require("../models/token_generator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

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
      res.status(200).json({ orders: orders, token: token });
    });
  },
  createOrder: (req, res) => {
    User.find({_id: req.user_id }, function (err, docs)
    {
      if (err) {
        throw err;
      }
    })
    console.log("POST ORDER")
    const order = new Order({userId: req.user_id, company: req.body.company, orders: req.body.orders});
    console.log("NEW ORDER: ", order)
    order.save(async (err) => {
      if (err) {
        throw err;
      }
      Order.find(async (err, orders) => {
        if (err){
          throw err;
        }
        const token = await TokenGenerator.jsonwebtoken(req.user_id);
        res.status(201).json({ message: "OK", orders: orders, token: token});
      })
      
      // const allOrders = await Order.find()
      // res.status(201).json({Order: allOrders, token: token});
    }
  )},
}


module.exports = OrdersController