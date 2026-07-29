const path = require("path");
const dotenv = require("dotenv");
const { Connection } = require("postgrejs");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const connection = new Connection({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

async function connectionTest() {
  try {
    await connection.connect();
    console.log("Database connection successful");
    connection.close();
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

module.exports = {
  connection,
  connectionTest,
};
