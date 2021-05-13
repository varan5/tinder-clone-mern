import express from "express";
import mongoose from "mongoose";
import Cards from "./models/DbCards.js";
import cors from "cors";

// App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = "mongodb://localhost/tinder_clone";

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Db connected successfully");
  }
);

// Api Endpoint
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/tinder/cards", (req, res) => {
  console.log(req.body)
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
