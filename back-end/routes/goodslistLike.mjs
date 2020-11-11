import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/goodslistlike', async (req, res, next) => {
  let { like } = req.query

  let query = `
    query {
        goodslistLike(like: "${like}") {
        id,
        image,
        nm,
        newprice,
        oldprice,
        name,
        sale,
        say,
        info,
        detailImages
      }
    }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router