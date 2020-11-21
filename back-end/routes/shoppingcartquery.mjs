import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/shoppingcartquery', async (req, res, next) => {
  let { userid } = req.query

  let query = `
    query {
      shoppingCartList(userid:${userid}) {
        id,
        userid,
        goodsid,
        shoppingCartName,
        shoppingCartImage,
        shoppingCartPrice,
        shoppingCartNum,
      }
    }
  `
  
  let result = await graphql(schema, query)

  res.json(result.data)
})
  
export default router