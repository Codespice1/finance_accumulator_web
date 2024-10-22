import NextAuth, {User as NextAuthUser, AuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {secrets} from "../config/secrets";
import {prisma} from "./prisma";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from "bcryptjs";
import {logger} from "./logger";
const log = logger.child({module: "authentication"});

export const authOptions: AuthOptions = {
  // session: {
  //   strategy: "jwt",
  // },
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
        if (!credentials?.email || !credentials.password) {
          log.info("Missing credentials");
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          log.info("User was not found in the DB OR password mismatch");
          return null;
        }

        log.info("Auth is successful for user ", user.name);

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          randomKey: "rand12345",
        };
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
  adapter: PrismaAdapter(prisma),
  callbacks: {
    // async session({session, token, user}: {session: any; token: any; user: any}) {
    //   return {
    //     ...session,
    //     user: {
    //       ...session.user,
    //       id: token.id,
    //       randomKey: token.randomKey,
    //     },
    //   };
    // },
    async redirect({url, baseUrl}: {url: string; baseUrl: string}) {
      return `${baseUrl}/dashboard`;
    },
    // jwt: ({token, user, account}: {token: any; user: any; account: any}) => {
    //   if (user && account?.provider === "") {
    //     const u = user as unknown as any;
    //     return {
    //       ...token,
    //       id: u.id,
    //       randomKey: u.randomKey,
    //     };
    //   }
    //   return token;
    // },
  },
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
