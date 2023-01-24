import { CarInfoFormType, CarInfoParameter,UpdateType } from "type/interfaces";
import { UpdateCarInfoFormType } from './../type/interfaces';
const CARINFO_ENDPOINT = "api/v1/car-info";
export class CarInfoService {


  //create carInfo list 
  static createCarInfoList = async (carInfoParameter: CarInfoParameter) => {
    try {
      const response = await fetch(CARINFO_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carInfoParameter),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };


  //all carInfo list with paginantion 
  static getCarInfoList = async (limit: number, page: number) => {
    try {
      const response = await fetch(
        CARINFO_ENDPOINT + `?limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  //delete carInfo api
  static deleteCarInfoOne = async (id: number) => {
    try {
      const response = await fetch(CARINFO_ENDPOINT + `/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };


   //GET SINGLE carInfo api
   static getCarInfoOne = async (id: number) => {
    try {
      const response = await fetch(CARINFO_ENDPOINT + `/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

   //uPDATE carInfo api
   static updateCarInfo = async (id: number,update:CarInfoParameter) => {
    try {
      const response = await fetch(CARINFO_ENDPOINT + `/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  

  //search api integration
  static getSearchResult = async (keyword:string, dateKeyword:string, page: number) => {
    console.log("=============",keyword,dateKeyword)

    
    try {
      const response = await fetch(
        CARINFO_ENDPOINT +`/search/?keyword=${keyword}&DateKeyword=${dateKeyword}&page=${page}`,
      
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
}
