import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/useraddressone', async (req, res, next) => {
  let { id } = req.query
  let query = `
     query {
        userAddressOne( id: ${id}) {
            id,
            userid,
            name,
            tel,
            state,
            location,
            officeId,
        }
     }
  `
  
  let result = await graphql(schema, query)
  res.json(result.data)
})
  
export default router