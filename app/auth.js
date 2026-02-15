import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials'
import UserModal from './utils/models/User';

export const {auth , signIn ,signOut ,handlers: {GET,POST}} = NextAuth({
    providers : [
        CredentialProvider ({
            name : 'credentials',

            async authorize(credentials){
                const user = await UserModal.findOne({email: credentials?.email})
                if(!user){
                    return null;
                }
                if(credentials?.password !== user.password){
                    return null;
                }
                return {name : user.userName , email: user.email , role : user.role  }
            }
        })
    ],
    secret:process.env.SECRET_KEY,
    callbacks:{
        async jwt({token , user}){
            if(user){
                token.userId = user.id;
                token.userName = user.name;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({session , token}){
            session.userId = token.userId;
            session.userName = token.userName;
            session.email = token.email;
            session.role = token.role;
            return session;
        }
    }
})