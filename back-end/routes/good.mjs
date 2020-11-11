import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/good', async (req, res, next) => {
  let { id } = req.query
  console.log(id)
  let query = `
     query {
        good( id: ${id}) {
          id,
          image,
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