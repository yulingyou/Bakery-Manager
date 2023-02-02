const BatchOrder = require("../models/BatchOrder");
const Order = require("../models/order");
const Item = require("../models/item");

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
    // const orderRef = '63da563fdd9375028be24ef8'
    // const order = await Order.findById(orderRef)

    // const batchOrder = new BatchOrder(req.body)
    // batchOrder.save()
    // // add the batchOrder to the order
    // const filter = {_id: orderRef}
    // const newOrders = [...order.orders, batchOrder]
    // await Order.findOneAndUpdate(filter, {orders: newOrders})

    const orderRef = '63dbab59d49bd03887f3aafe';
    const batchOrder = new BatchOrder(req.body);
    batchOrder.save();
    
    await Order.findByIdAndUpdate(orderRef, { $push: { orders: batchOrder } });
    
    res.status(201).json({batchOrder: batchOrder})
  },
  getBatch: async (req,res) => {
    const filter = { _id: req.params.batchID };
    const batch = await BatchOrder.find(filter)
    console.log("batch: ", batch)
    res.json(batch)
    
  },
  getBasketInfoByID: async (req,res) => {
    const filter = { _id: req.params.orderID };
    //Firstly filter the through the orders DB.
    //Then populate the variable 'batchOrders' with all in info in the orders field 
    const batchOrders = await Order.find(filter).populate('orders').exec()
    res.status(200).json(batchOrders)
  },
}


module.exports = OrdersController