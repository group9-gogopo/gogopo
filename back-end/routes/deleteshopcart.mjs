import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.delete('/deleteshopcart', async (req, res, next) => {
  let { id } = req.query
  let query = `
     mutation {
      deleteShopCart(
        id: ${id},
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