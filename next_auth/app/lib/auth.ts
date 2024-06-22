import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import page from "../user/page";

export const NEXT_AUTH={ 
        providers:[
            CredentialsProvider({
            name:'Email',
            credentials:{
                username:{label:'email',type:'text',placeholder:'Email'},
                password:{label:'password', type:'password',placeholder:'Password'}
            },
            async authorize(credentials: any) {
                //prisma logic to verify the user exists in db
                //then return the credentials you want to store in  your cookies
                return {
                    id: "1",
                    name:"Rashid Mazhar",
                    email:"rashidmazhar0507@gmail.com"
                };
            },
            
            
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID || "",
            clientSecret:process.env.GITHUB_CLIENT_SECRET || ""
        })
        ],
        secret:process.env.NEXTAUTH_SECRET,
        callbacks:{
            jwt:({token,user}:any)=>{
                //id by default is stored by key sub in nextauth
                //if you want to explicitly define userId field in token
                token.userId=token.sub
                console.log(token)
                return token
            },
            session:({session,token,user}:any)=>{
                console.log(session)
                if(session && session.user){
                    session.user.id=token.userId;
                }
                return session;
            }
        },
        pages:{
            signIn:"/signin"
        }
}
    