import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
})

// BANCO DE DADOS

// FaunaDB - HTTP => está cada vez mais sendo usado no Next para ações mais simples,
//                          não dependendo muito em alguns casos do Back-end.
// DynamoDB - AWS
// PostgreSQL, MongoDB

// 24h (1 conexão)
// 1000 autenticação ()