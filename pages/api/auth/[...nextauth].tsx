import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";



export default  NextAuth({
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
   
      CredentialsProvider({
        type: "credentials",
        credentials: {},
        async authorize(credentials, req) {
          
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
          // const res = await fetch("api/v1/users", {
          //   method: 'POST',
          //   body: JSON.stringify(credentials),
          //   headers: { "Content-Type": "application/json" }
          // })
         
            // const user=await res.json()
          // perform you login logic
          // find out user from db
          // console.log(user)
    
          if (email!=="mithu123@gmail.com" || password!=="1234") {
            throw new Error("invalid credentials");
          }
         
  
          // if everything is fine
        //return  user;
        return {
          id: "1234",
          name: "Mithu",
          email: "mithu123@gmail.com",
          
        };
            
            
        
        },
      }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
     //error: '/',
   signOut: '/auth/signin'
  },
  secret: process.env.NEXTAUTH_SECRET_KEY,
  
  callbacks: {
    
    jwt(params) {
     
      // update token
      if (params.user) {
        params.token.email = params.user.email;
      }
      // return final_token
      
      
      return params.token;
    },
    
  },
  
  events: {},
 
   // Enable debug messages in the console if you are having problems
   debug: false,
  
})