const BatchOrder = require("../models/BatchOrder");

const BatchOrdersController = {
  updateBatchByID: async (req,res) => {
    console.log("TRYING TO UPDATE")
    const batchID = req.params.batchID
    console.log(batchID)

    const filter = { _id: batchID};
    const new_quantity = req.body.batchQuantity;
    await BatchOrder.findByIdAndUpdate(batchID,  { batchQuantity: new_quantity });
    const batch = await BatchOrder.find(filter)
    console.log("new batch:", batch)
    res.status(202).json(batch)

    },
    getAll: async (req, res) => {
        const allBatchOrders = await BatchOrder.find()
          console.log("orders:", allBatchOrders)
          res.status(200).json(allBatchOrders);
    },
}


module.exports = BatchOrdersController