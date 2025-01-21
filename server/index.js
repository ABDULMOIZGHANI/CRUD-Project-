import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./db/database.js";
import { User } from "./models/user.model.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB()
  .then(() => {
    app.post("/createuser", (req, res) => {
      User.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.get("/", (req, res) => {
      User.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.get("/getUser/:id", (req, res) => {
      const id = req.params.id;
      User.findById({ _id: id })
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.delete("/deleteUser/:id", (req, res) => {
      const id = req.params.id;
      User.findByIdAndDelete({ _id: id })
        .then((res) => res.json(res))
        .catch((err) => res.json(err));
    });

    app.put("/updateuser/:id", (req, res) => {
      const id = req.params.id;
      User.findByIdAndUpdate(
        { _id: id },
        {
          userName: req.body.userName,
          email: req.body.email,
          age: req.body.age,
        }
      )
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.listen(8000, (req, res) => {
      console.log("SERVER IS RUNNING");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error");
  });
