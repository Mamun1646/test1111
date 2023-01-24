import { RevenueParameter,UpdateType } from "type/interfaces";
const REVENUE_ENDPOINT = "api/v1/revenue";
export class RevenueService {


  //create revenue list 
  static createRevenueList = async (revenueParameter: RevenueParameter) => {
    try {
      const response = await fetch(REVENUE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(revenueParameter),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };


  //all revenue list with paginantion 
  static getRevenueList = async (limit: number, page: number) => {
    try {
      const response = await fetch(
        REVENUE_ENDPOINT + `?limit=${limit}&page=${page}`,
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

  //delete revenue api
  static deleteRevenueOne = async (id: number) => {
    try {
      const response = await fetch(REVENUE_ENDPOINT + `/${id}`, {
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


   //GET SINGLE revenue api
   static getRevenueOne = async (id: number) => {
    try {
      const response = await fetch(REVENUE_ENDPOINT + `/${id}`, {
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

   //uPDATE revenue api
   static updateRevenue = async (id: number,update:UpdateType) => {
    try {
      const response = await fetch(REVENUE_ENDPOINT + `/${id}`, {
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
   
    try {
      const response = await fetch(
        REVENUE_ENDPOINT +`/search/?keyword=${keyword}&DateKeyword=${dateKeyword}&page=${page}`,
          // `/search?keyword=${keyword}&page=${page}`,
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




   //all revenue Report 
 static getRevenueReport = async (title: string,from_date: string,to_date:string) => {
  try {
    const response = await fetch(
      REVENUE_ENDPOINT + `/report?title=${title}&from_date=${from_date}&to_date=${to_date}`,
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

