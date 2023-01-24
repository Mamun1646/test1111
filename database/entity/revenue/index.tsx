import Connection from "database/connection";
import { DataTypes } from "sequelize";

export const Revenue = Connection.define(
  "revenue",
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
    r1_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r1_value: {
      type: DataTypes.INTEGER,
    },

    r2_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r2_value: {
      type: DataTypes.INTEGER,
    },
    r3_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r3_value: {
      type: DataTypes.INTEGER,
    },
    r4_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r4_value: {
      type: DataTypes.INTEGER,
    },
    r5_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r5_value: {
      type: DataTypes.INTEGER,
    },
    r6_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r6_value: {
      type: DataTypes.INTEGER,
    },
    r7_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r7_value: {
      type: DataTypes.INTEGER,
    },
    r8_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r8_value: {
      type: DataTypes.INTEGER,
    },
    r9_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r9_value: {
      type: DataTypes.INTEGER,
    },
    r10_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    r10_value: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

Connection.sync()
  .then(() => {
    console.log("Revenue Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
