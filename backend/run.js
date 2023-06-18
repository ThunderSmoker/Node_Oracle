
const oracledb = require('oracledb');
const run=async ()=> {
  try {
    await oracledb.createPool({
      user: 'djangousr',
      password: 'pswd',
      connectString: 'localhost:1521/orcl',
    });
  
    console.log("Successfully connected to Oracle Database");
    // const connection = await oracledb.getConnection();
    // await connection.execute(`
    //   CREATE TABLE note_table (
    //     TITLE VARCHAR2(20),
    //     DESCCRIP VARCHAR2(500),
    //     DATEPOST VarChar2(20)
    //   )
    // `);
  

  } catch (err) {
    console.error(err);
  }
  }

  module.exports = {run};