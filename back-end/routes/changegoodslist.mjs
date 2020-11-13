import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.patch('/changegoodslist', async (req, res, next) => {
  let { id, shoppingCartNum } = req.body
  let query = `
     mutation {
      changegoodslist(
        id: ${id},
        shoppingCartNum: "${shoppingCartNum}"
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