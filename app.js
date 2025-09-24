import express from "express";

const app = express();

app.use(express.json());
app.set("view engine", "ejs");

const admin = express.Router();
admin.get("/", (req, res) => {
  res.send("Admin");
});

app.param("id", (req, res, next, id) => {
  const userName = req.body.name;
  const user = {
    id,
    userName,
  };
  req.userinfo = user;
  next();
});

app.use("/admin", admin);
app.get("/", (req, res) => {
  // res.json("response done");
  res.render("text/index", {
    name: "Reazul Islam Reaz",
    home: "Faridpur",
  });
});

app.get("/:id", (req, res) => {
  const userDetails = req.userinfo;
  console.log(userDetails);
  res.json({ userDetails });
});
app.post("/", (req, res) => {
  const data = req.body;
  console.log(data.courseId);
  res.json(data);
});
app.listen(3000, () => {
  console.log("Express Server is running on http://localhost:3000");
});
