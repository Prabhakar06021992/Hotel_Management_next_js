//export {GET ,POST} from '@/api/auth';

import NextAuth from "next-auth";

const handler = NextAuth({
  providers: []
});

export { handler as GET, handler as POST };
