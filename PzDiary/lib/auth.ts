import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { IUser } from './types';
import { getUserInfo, loginUser, registUser } from './utils';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      // console.log('google - callback>>', account, profile);

      if (account?.provider === 'google') {
        // console.log('google - callback>>', account, profile);

        // 구글 로그인 사용자가 DB에 없으면 DB에 저장하기 registUser
        // 구글 로그인 사용자가 DB에 있으면 로그인 시켜서 메인홈으로 가기 loginUser
        const signInEmail = profile?.email;
        if (signInEmail) {
          // console.log('google - signInEmail>>', signInEmail);
          const { email } = await loginUser(signInEmail);
          // console.log('🚀 auth - email:', email);
          if (!email) {
            const data: IUser = { email: signInEmail };
            await registUser(data);
          }
        }
      }
      return true;
    },
    session: async ({ session }) => {
      if (!session.user.id) {
        console.log('google - session>>', session);

        // 세션에 user id 저장하기
        const { id } = await getUserInfo(session.user.email);
        console.log('google - session id>>', id);
        session.user.id = id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async authorized({ auth, request: { nextUrl } }) {
      // console.log('🚀 auth - auth:', auth);

      // 유저 인증 확인
      const isLoggedIn = !!auth?.user;
      // 보호하고 싶은 경로 설정 : 여기서는 /api/auth/signin 경로를 제외한 모든 경로가 보호
      const isOnProtected = !nextUrl.pathname.startsWith('/api/auth/signin');

      if (isOnProtected) {
        if (isLoggedIn) return true;
        return false; // '/api/auth/signin' 경로로 강제이동
      } else if (isLoggedIn) {
        // 홈페이지로 이동
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  secret: process.env.AUTH_SECRET as string,
});
