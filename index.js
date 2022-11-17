const express = require("express");
const client = require("./Dbconnections/mongodbConnection");
const port = 8090 || PORT;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const connectionToMongodb = async function () {
  await client.connect();
  return client;
};
connectionToMongodb().then(async (client) => {
  // const res = await client
  //   .db("Cartapp")
  //   .collection("Movies")
  //   .updateOne(
  //     { "movieslist.name": "Star Wars" },
  //     {
  //       $inc: {
  //         "movieslist.$.totalCopies": -1,
  //         "movieslist.$.cartQuantity": 1,
  //       },
  //       $set: {
  //         "movieslist.$.incart": 1,
  //       },
  //     }
  //   );
  // console.log(res);
  //
});

app.get("/movies", async (req, res) => {
  console.log("ping made");
  const listMve = await client.db("Cartapp").collection("Movies").findOne({});
  res.send({ listMve });
});
app.post("/movies/addtocart", async (req, res) => {
  let result = await client
    .db("Cartapp")
    .collection("Movies")
    .updateOne(
      {
        "movieslist.name": req.body.mveName,
      },
      {
        $inc: {
          "movieslist.$.totalCopies": -1,
        },
      }
    )
    .then(async (res) => {
      console.log("in cart checking process");
      try {
        const doc = await client.db("Cartapp").collection("users").findOne({
          "mycart.name": req.body.mveName,
        });
        console.log(doc);
        if (doc) {
          client
            .db("Cartapp")
            .collection("users")
            .updateOne(
              {
                "mycart.name": req.body.mveName,
              },
              {
                $inc: {
                  "mycart.$.cartQuantity": 1,
                },
              }
            );
        } else {
          client
            .db("Cartapp")
            .collection("users")
            .updateOne(
              {
                name: "sasank",
              },
              {
                $push: {
                  mycart: {
                    name: req.body.mveName,
                    cartQuantity: 1,
                    price: 123,
                    uri: req.body.imgName,
                  },
                },
              },
              { upsert: true }
            );
        }
      } catch (err) {
        console.log("in err");
      } finally {
      }
    });

  res.send(`${result}`);
});
app.post("/movies/checkout", async (req, res) => {
  await client
    .db("users")
    .findOne()
    .then((res) => {});
  console.log(result);
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Server is running at port 127.0.0.1:8090`);
});
