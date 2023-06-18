const oracledb = require("oracledb");
const { run } = require("./run");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

run();
app.get("/", async (req, res) => {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute("SELECT * FROM note_table");
    console.log("Data retrieved from Oracle Database");
    const rows = result.rows.map((row) => ({
      title: row[0],
      desc: row[1],
      date: row[2],
    }));
    await connection.close();
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});
app.post("/delete", async (req, res) => {
  const { title, desc, date } = req.body;
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      "DELETE FROM NOTE_TABLE WHERE TITLE=:1 AND DESCCRIP=:2 AND DATEPOST=:3",
      [title, desc, date]
    );

    await connection.commit();
    await connection.close();
    console.log("Data Deleted from Oracle Database");
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});
app.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      "INSERT INTO NOTE_TABLE (TITLE, DESCCRIP, DATEPOST) VALUES (:1, :2, :3)",
      [req.body.title, req.body.desc, req.body.date]
    );

    await connection.commit();
    await connection.close();
    console.log("Data inserted into Oracle Database");
    res.sendStatus(200);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});
app.listen(5000, () => console.log("Example app listening on port 5000!"));
