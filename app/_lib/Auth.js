import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    // authorized function will get access to auth(current session) and request object
    authorized({ auth, request }) {
      // !!auth?.user is same as writing if(auth?.user) {true}. "!!" converts the value into boolean
      return !!auth?.user;
    },
    // THIS signin is like a middleware function. It runs after user enters login/signup details and before actually signing or logging in the user
    // the signin gets passed in some information i.e user, account, profile
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  // The below code will redirect the unauthorized users who try to access protected routes(ex-/account) to login page
  pages: {
    signIn: "/login",
  },
};

// the auth function can also be used/served as middleware function
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
// handlers: { GET, POST } => this is destructuring handlers then and there
