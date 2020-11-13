import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.post('/shoppingCartsIns', async (req, res, next) => {
  let { userid, goodsid, shoppingCartName, shoppingCartImage,shoppingCartPrice,shoppingCartNum } = req.body
  console.log(userid, goodsid, shoppingCartName, shoppingCartImage,shoppingCartPrice,shoppingCartNum )
  let query = `
     mutation {
       insertCart(
        userid: ${userid}
        goodsid: ${goodsid}
        shoppingCartName: "${shoppingCartName}"
        shoppingCartImage: "${shoppingCartImage}"
        shoppingCartPrice: ${shoppingCartPrice}
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