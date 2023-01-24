
const USERS_ENDPOINT="api/v1/users"
export class UserService {
    
  static getOneUser= async(email:string) => {
    const res = await fetch(USERS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({email}),
      headers: { "Content-Type": "application/json" }
    })
   
      return res.json()
  };
}
