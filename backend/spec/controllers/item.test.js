const app = require("../../index");
const request = require("supertest");
require("../mongodb_helper");
const Item = require('../../models/item');

describe('/items', () => {
    // beforeAll( async () => {
    //   });
    
      beforeEach( async () => {
        await Item.deleteMany({});
      })
    
      afterAll( async () => {
        await Item.deleteMany({});

      })

      it('Gets items in a database', async () => {
        let item1 = new Item({
            "item_name": "muffin", "cost_to_bake": 0.25, "ingredients": [["flour",100],["eggs",2]],
            "batch_quantity": 12,
            "__v": 0
        });
    
        await item1.save();
        let response = await request(app)
            .get("/items")
            .send("Hello");
    
        let items = response.body.items.map((item) => ( item.item_name ));
        expect(items).toEqual(["muffin"]);
    
    })
  
});