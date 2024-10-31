import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  /**
   * Good to know:
   *
   * Although we're using the Credentials provider, it's generally recommended 
   * to use alternative providers such as OAuth or email providers. See the 
   * NextAuth.js docs for a full list of options.
   */
  providers: [Credentials({})]
} satisfies NextAuthConfig;