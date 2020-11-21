import express from 'express'
import { graphql, lexicographicSortSchema } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.patch('/shoppingcartsupdate', async (req, res, next) => {
  let { cartid,shoppingCartNum} = req.body
  let query = `
     mutation {
        updateShoopingCart(
            id: ${cartid}
            shoppingCartNum: ${shoppingCartNum}
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