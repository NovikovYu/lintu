// 24 12 2023 next-auth was disabled. Because I didn’t work in production

// import type { AuthOptions, User } from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';

// export const authConfig: AuthOptions = {
//   providers: [
//     Credentials({
//       credentials: {
//         name: { label: 'access', type: 'string', required: true },
//       },
//       async authorize(credentials) {
//         if (!credentials?.name || !credentials.name) return null;

//         const currentUser = {
//           name: credentials.name,
//         };

//         return currentUser as User;
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/signin',
//   },
// };
