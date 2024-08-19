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
    callbacks: {
      async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
        // Always redirect to the dashboard after sign in
        return url.startsWith(baseUrl) ? `${baseUrl}/dashboard` : url;
      },
    }
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
