import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/goodslist', async (req, res, next) => {
  let { sort,page, limit } = req.query

  let query = `
    query {
      goodslist(sort: "${sort}", page: ${page}, limit: ${limit}) {
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