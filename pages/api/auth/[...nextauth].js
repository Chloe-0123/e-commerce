import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { validateUser } from "./validateUser";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Implement your custom authentication logic here
        // e.g., validate the credentials against the MySQL database
        
        const user = await validateUser(
          credentials.email,
          credentials.password
        );
        if (user) {
          // If the credentials are valid, return an object with user data
          return Promise.resolve(user);
        } else {
          // If the credentials are invalid, return null or false
          return Promise.resolve(null);
        }
      },
    }),
  ], pages:{
    signIn: "../../login"
  },
  database: {
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "e-commerce",
    username: "root",
    password: "Tuiyhuabby5324!",
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
