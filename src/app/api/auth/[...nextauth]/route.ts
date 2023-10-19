import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

interface userProps {
	id: string
	name: string
	email: string
}

const nextAuthOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' }
			},

			async authorize(credentials, req) {
				const response = await fetch('http://localhost:3333/signIn', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password
					})
				})

				const user: userProps = await response.json()
				console.log(user)
				
				if (user && response.ok) {
					return user
				}

				return null
			},
		})
	],
	pages: {
		signIn: '/'
	},
	callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user)
			return {
				...token, 
				redirect: true
			}
		},
		async session({ session, token, user }){
			session = token.user as any
			return {
				...session,
				user: {
					name: token.name,
					email: token.email,
					role: token.role,
					id: token.id
				}
			}
		}
	}
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }