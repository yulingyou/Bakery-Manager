const BatchOrder = require("../models/BatchOrder");
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
  addBatch: async (req, res) => {
    const orderRef = '63da563fdd9375028be24ef8'
    const order = await Order.findById(orderRef)

    const batchOrder = new BatchOrder(req.body)
    batchOrder.save()
    // add the batchOrder to the order
    const filter = {_id: orderRef}
    const newOrders = [...order.orders, batchOrder]
    await Order.findOneAndUpdate(filter, {orders: newOrders})

    res.status(200).json({batchOrder: batchOrder})
  }
}


module.exports = OrdersController