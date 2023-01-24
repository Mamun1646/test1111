import { Sequelize } from "sequelize";
//local environment 
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password =process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

//connection estatblished
console.log("=========================",host,database,username,password)
const Connection = new Sequelize(database, username, password, {
  host:host,
  dialect:"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});


//connection test section
const testConnection = async () => {
  try {
    await Connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testConnection();

export default Connection;
