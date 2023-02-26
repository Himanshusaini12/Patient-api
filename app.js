const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));


const patientRouter = require("./routes/patientRoutes");

// app.get("/", (req, res) => {
//   res.status(404).json({ message: "hiii", msg: "hello" });
// });

// app.post("/", (req, res) => {
//   res.send("hii post");
// });

//middlewares----------------------

//functions-------------------------------------

// app.get("/api/v1/tour", getAlltours);
// app.get("/api/v1/tour/:id", getTour);
// app.post("/api/v1/tour", createTour);
// app.delete("/api/v1/tour/:id", deleteTour);

//routes-------------------------------------------------

app.use("/api/v1/patient", patientRouter);
// app
//   .route("/api/v1/users/:id")
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);
module.exports = app;
