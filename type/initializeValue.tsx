const currentDate = new Date().toJSON().slice(0, 10)
export const  initializeReportForm={
  from_date:currentDate,
  to_date:currentDate,
  title:""
  

}
export const initializeRevenueForm = {
  r1_title: "",
  r1_value: 0,
  r2_title: "",
  r2_value: 0,
  r3_title: "",
  r3_value: 0,
  r4_title: "",
  r4_value: 0,
  r5_title: "",
  r5_value: 0,
  r6_title: "",
  r6_value: 0,
  r7_title: "",
  r7_value: 0,
  r8_title: "",
  r8_value: 0,
  r9_title: "",
  r9_value: 0,
  r10_title: "",
  r10_value: 0,
  date: currentDate
};

export const initializeExpenditureForm = {
  e1_title: "",
  e1_value: 0,
  e2_title: "",
  e2_value: 0,
  e3_title: "",
  e3_value: 0,
  e4_title: "",
  e4_value: 0,
  e5_title: "",
  e5_value: 0,
  e6_title: "",
  e6_value: 0,
  e7_title: "",
  e7_value: 0,
  e8_title: "",
  e8_value: 0,
  e9_title: "",
  e9_value: 0,
  e10_title: "",
  e10_value: 0,
  e11_title: "",
  e11_value: 0,
  e12_title: "",
  e12_value: 0,
  e13_title: "",
  e13_value: 0,
  e14_title: "",
  e14_value: 0,
  e15_title: "",
  e15_value: 0,
  e16_title: "",
  e16_value: 0,
  e17_title: "",
  e17_value: 0,
  e18_title: "",
  e18_value: 0,
  e19_title: "",
  e19_value: 0,
  e20_title: "",
  e20_value: 0,
  date: currentDate,
};


export const initialUpdateForm= {
  id: 0,
  title: "",
  date: new Date,
  value: 0
}
export const initialzieCarInfoForm = {
  veichle_name: "",
  chasis_no: "",
  engine_no: "",
  model_year: "",
  reg_no: "",
  importer_name: "",
  importer_address: "",
  exporter_name: "",
  // exporter_address: "Dhaka Banglashes",
  from: new Date(),
  buyer_name: "",
  buyer_phone: "",
  buyer_address: "",
  sale_date: new Date(),
  registration_on_date: new Date(),
  registration_by: "",
  reference_by: "",
  ref_mobile: "",
  order_value: 0,
  servicing:0,
  touch_up: 0,
  garage: 0,
  mobil_filter_plug: 0,
  auto_transmission: 0,
  dvd_camera: 0,
  electrical_works: 0,
  battary:0,
  allow_rim: 0,
  spare_wheel: 0,
  //confusion
  mode_of_payment:"",
  first_payment: 0,
  second_payment: 0,
  third_payment: 0,
  registration_mic: 0,
  number_plate_repet_tool: 0,
  broker_or_driver: 0,
  showroom_commision: 0,
  spare_parts_purchase: 0,
  seat_cover: 0,
  floor_carpeting: 0,
  petrol: 0,
  steel_bumper: 0,
  steeering_cover: 0,
  miscellaneous1: 0,
  body_cover: 0,
  miscellaneous2: 0,
  total_cost: 0,
  sale_price: 0,
  net_profit_or_loss: 0,
};
