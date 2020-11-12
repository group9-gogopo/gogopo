import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/forid', async (req, res, next) => {
  let { username } = req.query
  let query = `
     query {
        forid(username: "${username}") {
          ret, 
          msg,
          id
        }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router