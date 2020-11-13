import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/searchorderinfo', async (req, res, next) => {
  let { userId } = req.query
  // console.log(userId)
  let query = `
    query {
      searchOrderInfo(userId: ${userId}) {
        userId,
        orderTime,
        orderNumber,
        orderContent,
        isEvaluate,
        evaluateContent
      }
    }
  `

  let result = await graphql(schema, query)

  res.json(result.data)
})

export default router