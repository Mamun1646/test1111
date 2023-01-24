import Connection from "database/connection";
import { DataTypes, DATEONLY } from "sequelize";
export const CarInfo = Connection.define(
  "car_informations",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    veichle_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chasis_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    engine_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model_year: {
      //type problem
      type: DataTypes.STRING,
    },
    reg_no: {
      type: DataTypes.STRING,
    },
    importer_name: {
      type: DataTypes.STRING,
    },
    importer_address: {
      type: DataTypes.STRING,
    },
    exporter_name: {
      type: DataTypes.STRING,
    },
    exporter_address: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.DATEONLY,
    },
    buyer_name: {
      type: DataTypes.STRING,
    },
    buyer_address: {
      type: DataTypes.STRING,
    },
    sale_date: {
      type: DataTypes.DATE,
    },
    registration_on_date: {
      type: DataTypes.DATE,
    },
    registration_by: {
      type: DataTypes.STRING,
    },
    reference_by: {
      type: DataTypes.STRING,
    },
    ref_mobile: {
      type: DataTypes.STRING,
    },
    buyer_phone: {
      type: DataTypes.STRING,
    },
    order_value: {
      type: DataTypes.INTEGER,
    },
    servicing: {
      type: DataTypes.INTEGER,
    },
    touch_up: {
      type: DataTypes.INTEGER,
    },
    garage: {
      type: DataTypes.INTEGER,
    },
    mobil_filter_plug: {
      type: DataTypes.INTEGER,
    },
    auto_transmission: {
      type: DataTypes.INTEGER,
    },
    dvd_camera: {
      type: DataTypes.INTEGER,
    },
    electrical_works: {
      type: DataTypes.INTEGER,
    },
    battary: {
      type: DataTypes.INTEGER,
    },
    allow_rim: {
      type: DataTypes.INTEGER,
    },
    spare_wheel: {
      type: DataTypes.INTEGER,
    },
    mode_of_payment: {
      type: DataTypes.ENUM("FULL_PAYMENT", "BALANCE"),
    },
    first_payment: {
      type: DataTypes.INTEGER,
    },
    second_payment: {
      type: DataTypes.INTEGER,
    },
    third_payment: {
      type: DataTypes.INTEGER,
    },
    //mode of payment
    //mode of payment
    //mode of payment
    //mode of payment
    registration_mic: {
      type: DataTypes.INTEGER,
    },
    number_plate_repet_tool: {
      type: DataTypes.INTEGER,
    },
    broker_or_driver: {
      type: DataTypes.INTEGER,
    },
    showroom_commision: {
      type: DataTypes.INTEGER,
    },
    spare_parts_purchase: {
      type: DataTypes.INTEGER,
    },
    seat_cover: {
      type: DataTypes.INTEGER,
    },
    floor_carpeting: {
      type: DataTypes.INTEGER,
    },
    petrol: {
      type: DataTypes.INTEGER,
    },
    steel_bumper: {
      type: DataTypes.INTEGER,
    },
    steeering_cover: {
      type: DataTypes.INTEGER,
    },
    miscellaneous1: {
      type: DataTypes.INTEGER,
    },
    body_cover: {
      type: DataTypes.INTEGER,
    },
    miscellaneous2: {
      type: DataTypes.INTEGER,
    },
    total_cost: {
      type: DataTypes.INTEGER,
    },
    sale_price: {
      type: DataTypes.INTEGER,
    },
    net_profit_or_loss: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
Connection.sync()
  .then(() => {
    console.log("Car Information Table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
