import Connection from "database/connection";
import { DataTypes } from "sequelize";

export const Expenditure = Connection.define(
  "expenditure",
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
    e1_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e1_value: {
      type: DataTypes.INTEGER,
    },

    e2_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e2_value: {
      type: DataTypes.INTEGER,
     
    },
    e3_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e3_value: {
      type: DataTypes.INTEGER,
      
    },
    e4_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e4_value: {
      type: DataTypes.INTEGER,
     
    },
    e5_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e5_value: {
      type: DataTypes.INTEGER,
    },
    e6_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e6_value: {
      type: DataTypes.INTEGER,
    },
    e7_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e7_value: {
      type: DataTypes.INTEGER,
    },
    e8_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e8_value: {
      type: DataTypes.INTEGER,
    },
    e9_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e9_value: {
      type: DataTypes.INTEGER,
    },
    e10_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e10_value: {
      type: DataTypes.INTEGER,
    },
    e11_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e11_value: {
      type: DataTypes.INTEGER,
    },

    e12_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e12_value: {
      type: DataTypes.INTEGER,
    },
    e13_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e13_value: {
      type: DataTypes.INTEGER,
    },
    e14_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e14_value: {
      type: DataTypes.INTEGER,
    },
    e15_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e15_value: {
      type: DataTypes.INTEGER,
    },
    e16_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e16_value: {
      type: DataTypes.INTEGER,
    },
    e17_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e17_value: {
      type: DataTypes.INTEGER,
    },
    e18_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e18_value: {
      type: DataTypes.INTEGER,
    },
    e19_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e19_value: {
      type: DataTypes.INTEGER,
    },
    e20_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e20_value: {
      type: DataTypes.INTEGER,
      
    },
    e21_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e21_value: {
      type: DataTypes.INTEGER,
    },
    e22_title: {
      type: DataTypes.STRING,
      unique: true
    },
    e22_value: {
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
    console.log("Expenditure Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
