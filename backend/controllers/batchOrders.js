const BatchOrder = require("../models/BatchOrder");

const BatchOrdersController = {
  updateBatchByID: async (req,res) => {
    console.log("TRYING TO UPDATE")
    const batchID = req.params.batchID
    console.log(batchID)

    const filter = { _id: batchID};
    const new_quantity = req.body.batch_quantity;
    await BatchOrder.findByIdAndUpdate(batchID,  { batch_quantity: new_quantity });
    const batch = await BatchOrder.find(filter)
    console.log("new batch:", batch)
    res.status(202).json(batch)

  },
}


module.exports = BatchOrdersController