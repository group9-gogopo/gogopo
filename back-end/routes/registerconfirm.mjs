import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/registerconfirm', async (req, res, next) => {
  let { username } = req.query

  let query = `
     query {
        registerconfirm(username: "${username}") {
          ret,
          msg
        }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router