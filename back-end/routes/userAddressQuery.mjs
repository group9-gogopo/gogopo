import express from 'express'
import { graphql } from 'graphql'
import schema from '../MyGraphQLSchema.mjs'

const router = express.Router()

router.get('/useraddressquery', async (req, res, next) => {
  let { userid } = req.query

  let query = `
    query {
        userAddressList(userid:${userid}) {
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