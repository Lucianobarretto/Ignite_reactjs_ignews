import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Luciano' },
    { id: 2, name: 'Ana Paula' },
    { id: 3, name: 'Líria' },
  ]

  return response.json(users)
}
