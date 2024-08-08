import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {secrets} from "../config/secrets";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: secrets.githubID,
      clientSecret: secrets.githubSecret,
    }),
    GoogleProvider({
      clientId: secrets.googleID,
      clientSecret: secrets.googleSecret,
    }),
  ],
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
