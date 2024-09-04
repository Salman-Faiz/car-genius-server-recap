// to start basic express server
const express = require("express");
const cors = require("cors");
const app = express();
// port for run the server
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// to convert json data which will be sent through req.body
app.use(express.json());

//app.get user for check whether the server is running or not
app.get("/", (req, res) => {
  res.send("Car Genius Server is running");
});
// app.listen user for check the port no
app.listen(port, () => {
  console.log(`car genius server is running on port ${port}`);
});
// **********
// ***********
// code added from mongoDb database->connect
// **********
// ***********

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// import from dotenv npm site
require("dotenv").config();
console.log(process.env.CAR_PASS);

const uri = `mongodb+srv://${process.env.CAR_USER}:${process.env.CAR_PASS}@cluster0.pc8mx8l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // created a collection to find data
    const serviceCollection = client.db("carGenius").collection("Services");

    // find data UNDER an api
    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Find a specific data
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      //
      const options = {
        // Include only the `title` and `services` fields in the returned document
        projection: { title: 1, service_id: 1, price: 1, img: 1 },
      };

      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });
    // *****************************************
    // *****************************************
    // *********************************************
    // **************************************
    //
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
