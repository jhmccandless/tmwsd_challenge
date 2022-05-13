const express = require("express");
const cors = require("cors");

const pgp = require("pg-promise")({});
const dbsettings = { database: "jasonmccandless" };
const db = pgp(dbsettings);
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const results = await db.query(`SELECT * FROM messages`);
  res.send(results);
  //   console.log(results);
});

app.post("/messages_db", async (req, res) => {
  const messageInfo = req.body.messageDetails;
  console.log(messageInfo[0]);
  let messageTitle, messageBody;
  messageTitle = messageInfo[0];
  messageBody = messageInfo[1];
  date = new Date().toISOString().slice(0, 19).replace("T", " ");
  db.none(
    `INSERT INTO messages (deleted, message_title, message_body, created_on)
  VALUES (
    'true',
    '${messageTitle}',
    '${messageBody}',
    '${date}')`
  );
});

app.delete("/messages_delete:id", async (req, res) => {
  res.send("deleting");
  const deleteInfo = req.params.id.slice(1);
  console.log(deleteInfo);
  db.none(`DELETE FROM messages WHERE messages.id = ${deleteInfo}`);
});

const PORT = process.env.PORT || 3785;

app.set("port", PORT);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
