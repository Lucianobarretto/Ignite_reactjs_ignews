import { NextApiRequest, NextApiResponse } from 'next'

// Formas de autenticação:
//                          => JWT (Storage)
//                          => Next Auth (Social)
//                          => Cognito, Auth0


export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Luciano' },
    { id: 2, name: 'Ana Paula' },
    { id: 3, name: 'Líria' },
  ]

  return response.json(users)
}
