import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.post('/addorderinfo', async (req, res, next) => {
  let { userId, orderTime, orderNumber, orderContent, isEvaluate,evaluateContent } = req.body
  let query = `
     mutation {
      insertOrder(
        userId: ${userId}
        orderTime: "${orderTime}"
        orderNumber: "${orderNumber}"
        orderContent: "${orderContent}"
        isEvaluate: ${isEvaluate}
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