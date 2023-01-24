import Connection from "database/connection";
import { DataTypes } from "sequelize";


export const RevenueV1  = Connection.define(
  "revenuev1",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    uid:{
        type: DataTypes.STRING, 
    },
    title: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Connection.sync()
  .then(() => {
    console.log("RevenueV1 Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });


