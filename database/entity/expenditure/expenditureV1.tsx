import Connection from "database/connection";
import { DataTypes } from "sequelize";


export const ExpenditureV1  = Connection.define(
  "exependiturev1",
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
    console.log("ExpenditureV1 Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });


