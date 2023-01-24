import { Sequelize, DataTypes } from "sequelize";
import Connection from "database/connection";

export const User = Connection.define(
  "users",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    last_login: {
      type: DataTypes.TIME,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    timestamps: false,
  }
);
Connection.sync()
  .then(() => {
    console.log("Users Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

// `sequelize.define` also returns the model
console.log(User === Connection.models.User);
