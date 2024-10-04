import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {secrets} from "../config/secrets";
import {prisma} from "./prisma";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        const user = {id: "1", name: "Admin", email: "admin@admin.com"};
        return user;
      },
    }),
    GithubProvider({
      clientId: secrets.githubID,
      clientSecret: secrets.githubSecret,
    }),
    GoogleProvider({
      clientId: secrets.googleID,
      clientSecret: secrets.googleSecret,
    }),
  ],
  callbacks: {
    async redirect({url, baseUrl}: {url: string; baseUrl: string}) {
      // Always redirect to the dashboard after sign in
      return `${baseUrl}/dashboard`;
    },
  },
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
