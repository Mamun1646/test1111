import { ExpenditureParameter, UpdateType } from "type/interfaces";
const Expenditure_ENDPOINT = "api/v1/expenditure";
export class ExpenditureService {
  //create expenditure list
  static createExpenditureList = async (
    expenditureParameter: ExpenditureParameter
  ) => {
    try {
      const response = await fetch(Expenditure_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenditureParameter),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  //all expenditure list with paginantion
  static getExpenditureList = async (limit: number, page: number) => {
    try {
      const response = await fetch(
        Expenditure_ENDPOINT + `?limit=${limit}&page=${page}`,
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

  //delete Expenditure api
  static deleteExpenditureOne = async (id: number) => {
    try {
      const response = await fetch(Expenditure_ENDPOINT + `/${id}`, {
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

  //GET SINGLE Expenditure api
  static getExpenditureOne = async (id: number) => {
    try {
      const response = await fetch(Expenditure_ENDPOINT + `/${id}`, {
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

  //uPDATE Expenditure api
  static updateExpenditure = async (id: number, update: UpdateType) => {
    try {
      const response = await fetch(Expenditure_ENDPOINT + `/${id}`, {
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
  static getSearchResult = async (
    keyword: string,
    dateKeyword: string,
    page: number
  ) => {
    try {
      const response = await fetch(
        Expenditure_ENDPOINT +
          `/search/?keyword=${keyword}&DateKeyword=${dateKeyword}&page=${page}`,

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
  
   //all Expenditure Report 
 static getExpenditureReport = async (title: string,from_date: string,to_date:string) => {
  try {
    const response = await fetch(
      Expenditure_ENDPOINT + `/report?title=${title}&from_date=${from_date}&to_date=${to_date}`,
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
