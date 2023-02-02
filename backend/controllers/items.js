const Item = require("../models/item");
const { ref, getDownloadURL, getStorage, uploadBytes } = require("firebase/storage");
const storage = require('../firebaseConfig')


const ItemsController = {
  getAll: (req, res) => {
    console.log("GET ITEMS")
    Item.find(async (err, items) => {
      if (err) {
        throw err;
      }
      console.log("items:", items)
      res.status(200).json({ items:  items });
    });
  },
  createItem: (req, res) => {
    console.log("POST ITEM")
    const item = new Item(req.body);
    console.log("NEW ITEM: ", item)
    item.save(async (err) => {
      if (err) {
        throw err;
      }
      const allItems = await Item.find()
      res.status(201).json({items: allItems});
    }
  )},
  getImage: (req, res) => {
    getDownloadURL(ref(storage, 'bpcbgbeesroom.png'))
      .then((url) => {

      console.log(url)
      res.status(200).json({url})

      })
      .catch((error) => {
        // Handle any errors
        console.log(error)
      });
  },
  postImage: (req, res) => {
    try {
      const image = req.body; 
      console.log('image', image);
      res.status(200).json({message: "success"})
    } catch(error) {
      console.log(error)
    }


    const storage = getStorage();
    const storageRef = ref(storage, 'images');

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    });
    
  }
}


module.exports = ItemsController