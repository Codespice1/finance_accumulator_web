import {secrets} from "@/config/secrets";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: secrets.githubID,
      clientSecret: secrets.githubSecret,
    }),
  ],
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
