import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const messagedb = new pg.Pool({ connectionString: process.env.MESSAGEDB });

app.get("/", function (request, response) {
  response.json("hello");
});

app.get("/messages", async function (request, response) {
  // we can use the 'DB' object to query/talk to mypost database.
  const result = await messagedb.query(`SELECT * FROM messages`);
  const messages = result.rows;
  response.json(messages);
});

app.listen(8080, function () {
  console.log("Server is running on port render");
});
