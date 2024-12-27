const { MongoClient } = require("mongodb");
const fs = require("node:fs");
const path = require("node:path");
const mongodb = new MongoClient(
  "mongodb+srv://gomycode:gomycode2023@cluster0.xu8jhiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

async function getProducts() {
  try {
    await mongodb.connect();
    const database = mongodb.db("ecommerce");
    const products = database.collection("products");
    const data = await products.find().toArray();
    const jsonData = JSON.stringify(data);
    const filePath = path.resolve("data.json");
      fs.writeFileSync(filePath, jsonData);
      
  } catch (error) {
    console.log(error);
  } finally {
    await mongodb.close();
  }
}

getProducts();
