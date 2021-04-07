import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query)
  
  const users = [
    { id: 1, name: 'Luciano' },
    { id: 2, name: 'Ana Paula' },
    { id: 3, name: 'Raul' },
  ]

  return response.json(users)
}