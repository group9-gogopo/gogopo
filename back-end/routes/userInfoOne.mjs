import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/userinfoone', async (req, res, next) => {
  let { id } = req.query
  let query = `
     query {
        userInfoOne( id: ${id}) {
            id,
            username,
            tel,
            email,
        }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router