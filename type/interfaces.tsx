export interface Expeness {
  Title: string;
  chasis_no: string;
  engine_no: string;
  importer_name: string;
  model_year: string;
  action: string;
}
export interface TableType {
  Date: string;
  Title: string;
  amount?: number;
  model_year?:string
  engine_no?:string
  vechile_name?:string,
  chasis_no?:string,
  exporter_name?:string,

}
export interface UpdateType {
  id?: number;
  title?: string;
  date?: Date;
  value?: number;
  
  

}
export interface UpdateFormType {
  id?: number;
  title?: string;
  date?: Date;
  value?: number;
  [key: string]: any;
}


export interface RevenueFormType {
  r1_title: string;
  r1_value: number;
  r2_title: string;
  r2_value: number;
  r3_title: string;
  r3_value: number;
  r4_title: string;
  r4_value: number;
  r5_title: string;
  r5_value: number;
  r6_title: string;
  r6_value: number;
  r7_title: string;
  r7_value: Number;
  r8_title: string;
  r8_value: number;
  r9_title: string;
  r9_value: number;
  r10_title: string;
  r10_value: number;
  date: string;
  [key: string]: any;
}

export interface RevenueParameter {
  r1_title: string;
  r1_value: number;
  r2_title: string;
  r2_value: number;
  r3_title: string;
  r3_value: number;
  r4_title: string;
  r4_value: number;
  r5_title: string;
  r5_value: number;
  r6_title: string;
  r6_value: number;
  r7_title: string;
  r7_value: Number;
  r8_title: string;
  r8_value: number;
  r9_title: string;
  r9_value: number;
  r10_title: string;
  r10_value: number;
  date: string;
}

export interface ExpenditureFormType {
  e1_title: string;
  e1_value: number;
  e2_title: string;
  e2_value: number;
  e3_title: string;
  e3_value: number;
  e4_title: string;
  e4_value: number;
  e5_title: string;
  e5_value: number;
  e6_title: string;
  e6_value: number;
  e7_title: string;
  e7_value: Number;
  e8_title: string;
  e8_value: number;
  e9_title: string;
  e9_value: number;
  e10_title: string;
  e10_value: number;
  e11_title: string;
  e11_value: number;
  e12_title: string;
  e12_value: number;
  e13_title: string;
  e13_value: number;
  e14_title: string;
  e14_value: number;
  e15_title: string;
  e15_value: number;
  e16_title: string;
  e16_value: number;
  e17_title: string;
  e17_value: Number;
  e18_title: string;
  e18_value: number;
  e19_title: string;
  e19_value: number;
  e20_title: string;
  e20_value: number;
  date: string;
  [key: string]: any;
}
export interface ExpenditureParameter {
  e1_title: string;
  e1_value: number;
  e2_title: string;
  e2_value: number;
  e3_title: string;
  e3_value: number;
  e4_title: string;
  e4_value: number;
  e5_title: string;
  e5_value: number;
  e6_title: string;
  e6_value: number;
  e7_title: string;
  e7_value: Number;
  e8_title: string;
  e8_value: number;
  e9_title: string;
  e9_value: number;
  e10_title: string;
  e10_value: number;
  e11_title: string;
  e11_value: number;
  e12_title: string;
  e12_value: number;
  e13_title: string;
  e13_value: number;
  e14_title: string;
  e14_value: number;
  e15_title: string;
  e15_value: number;
  e16_title: string;
  e16_value: number;
  e17_title: string;
  e17_value: Number;
  e18_title: string;
  e18_value: number;
  e19_title: string;
  e19_value: number;
  e20_title: string;
  e20_value: number;
  date: string;
}

export interface CarInfoParameter {
  veichle_name: string;
  chasis_no: string;
  engine_no: string;
  model_year: string;
  reg_no: string;
  importer_name: string;
  importer_address: string;
  exporter_name: string;
  // exporter_address: string;
  from: Date;
  buyer_name: string;
  buyer_phone: string;
  buyer_address: string;
  sale_date: Date;
  registration_on_date: Date;
  registration_by: string;
  reference_by: string;
  ref_mobile: string;
  order_value: number;
  servicing: number;
  touch_up: number;
  garage: number;
  mobil_filter_plug: number;
  auto_transmission: number;
  dvd_camera: number;
  electrical_works: number;
  battary: number;
  allow_rim: number;
  spare_wheel: number;
  
  mode_of_payment:string,
  first_payment: number;
  second_payment: number;
  third_payment: number;
  registration_mic: number;
  number_plate_repet_tool: number;
  broker_or_driver: number;
  showroom_commision: number;
  spare_parts_purchase: number;
  seat_cover: number;
  floor_carpeting: number;
  petrol: number;
  steel_bumper: number;
  steeering_cover: number;
  miscellaneous1: number;
  body_cover: number;
  miscellaneous2: number;
  total_cost: number;
  sale_price: number;
  net_profit_or_loss: number;
}
export interface CarInfoFormType {
  veichle_name: string;
  chasis_no: string;
  engine_no: string;
  model_year: string;
  reg_no: string;
  importer_name: string;
  importer_address: string;
  exporter_name: string;
  // exporter_address: string;
  from: Date;
  buyer_name: string;
  buyer_phone: string;
  buyer_address: string;
  sale_date: Date;
  registration_on_date: Date;
  registration_by: string;
  reference_by: string;
  ref_mobile: string;
  order_value: number;
  servicing: number;
  touch_up: number;
  garage: number;
  mobil_filter_plug: number;
  auto_transmission: number;
  dvd_camera: number;
  electrical_works: number;
  battary: number;
  allow_rim: number;
  spare_wheel: number;
  //confusion
  mode_of_payment:string,
  first_payment: number;
  second_payment: number;
  third_payment: number;
  registration_mic: number;
  number_plate_repet_tool: number;
  broker_or_driver: number;
  showroom_commision: number;
  spare_parts_purchase: number;
  seat_cover: number;
  floor_carpeting: number;
  petrol: number;
  steel_bumper: number;
  steeering_cover: number;
  miscellaneous1: number;
  body_cover: number;
  miscellaneous2: number;
  total_cost: number;
  sale_price: number;
  net_profit_or_loss: number;
  [key: string]: any;
}

export interface UpdateCarInfoFormType {
  id:number,
  veichle_name: string;
  chasis_no: string;
  engine_no: string;
  model_year: string;
  reg_no: string;
  importer_name: string;
  importer_address: string;
  exporter_name: string;
  // exporter_address: string;
  from: Date;
  buyer_name: string;
  buyer_phone: string;
  buyer_address: string;
  sale_date: Date;
  registration_on_date: Date;
  registration_by: string;
  reference_by: string;
  ref_mobile: string;
  order_value: number;
  servicing: number;
  touch_up: number;
  garage: number;
  mobil_filter_plug: number;
  auto_transmission: number;
  dvd_camera: number;
  electrical_works: number;
  battary: number;
  allow_rim: number;
  spare_wheel: number;
  //confusion
  mode_of_payment:string,
  first_payment: number;
  second_payment: number;
  third_payment: number;
  registration_mic: number;
  number_plate_repet_tool: number;
  broker_or_driver: number;
  showroom_commision: number;
  spare_parts_purchase: number;
  seat_cover: number;
  floor_carpeting: number;
  petrol: number;
  steel_bumper: number;
  steeering_cover: number;
  miscellaneous1: number;
  body_cover: number;
  miscellaneous2: number;
  total_cost: number;
  sale_price: number;
  net_profit_or_loss: number;
  
}
export interface Search {
  text: string;
  date: string;
  [key: string]: any;
}
export interface SearchData {
  text: string;
  date: string;
}


export interface CarInfoObejectType{
  type:string;
  label:string;
  value:string;
}
export interface ReportType{
  from_date:string;
  to_date:string;
  title:string,
  [key: string]: any;

}
export interface ReportSearch{
  from_date:string;
  to_date:string;
  title:string,


}
