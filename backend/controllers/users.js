const User = require("../models/user");

const UsersController = {
  // getAll: (req, res) => {
  //   console.log("GET ORDERS")
  //   User.find(async (err, users) => {
  //     if (err) {
  //       console.log(err)
  //       throw err;
  //     }
  //     console.log("orders:", users)
  //     res.status(200).json({ users:  users });
  //   });
  // },
  Create: (req, res) => {
    const user = new User({ 
      companyName: req.body.companyName,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      phoneNumber: req.body.phone_number
    });

    user.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "OK" })
      }
    });
  },
};

module.exports = UsersController;