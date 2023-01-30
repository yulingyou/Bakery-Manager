const express = require("express");
const itemsRouter = require("./routes/items");

const PORT = process.env.PORT || 3001;

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
// const mongoDB = "mongodb+srv://<username>:<password>@cluster0.ds0ycgm.mongodb.net/<database_name>?retryWrites=true&w=majority";
const mongoDB = "mongodb+srv://harry_hibbins:9a8dtUhsmkEGawj@cluster0.ds0ycgm.mongodb.net/Bakery?retryWrites=true&w=majority";

app.use(express.json())
app.use("/items", itemsRouter);


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


app.get("/api", (req, res) => {
    res.json({ message: "Hello from Expressingssi!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});