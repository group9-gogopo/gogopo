import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.patch('/changeorder', async (req, res, next) => {
  let { id, evaluateContent } = req.body
  let query = `
     mutation {
        changeOrder(
        id: ${id},
        evaluateContent: "${evaluateContent}"
       ) {
         ret,
         msg
       }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router